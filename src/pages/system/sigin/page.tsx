import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SigInSchema } from "@/schemas/sigin";
import { useSignIn } from "@/api/sigin";
import { SigInData } from "@/interfaces/sigin";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

type SiginType = z.infer<typeof SigInSchema>;

export default function SigIn() {
  const methods = useForm<SiginType>({
    resolver: zodResolver(SigInSchema),
  });

  const { register, handleSubmit } = methods;
  const navigate = useNavigate();

  const { mutateAsync, isPending } = useSignIn();

  const handleInsert = async ({ username, password }: SigInData) => {
    const data = { username, password };
    navigate("/system/home");
    await mutateAsync(data);
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <Card className="w-[300px]">
        <CardHeader className="flex items-center justify-center">
          <CardTitle>Welcome back</CardTitle>
          <CardDescription>Please enter your details</CardDescription>
        </CardHeader>
        <CardContent>
          <FormProvider {...methods}>
            <form
              onSubmit={handleSubmit((data) => handleInsert(data))}
              className="flex flex-col gap-2"
            >
              <div>
                <Label>Username</Label>
                <Input
                  type="text"
                  placeholder="Ex: Thiago"
                  {...register("username")}
                />
              </div>
              <div className="mb-3">
                <Label>Password</Label>
                <Input
                  type="password"
                  placeholder="*****"
                  {...register("password")}
                />
              </div>
              <Button>Access</Button>
            </form>
          </FormProvider>
        </CardContent>
        <CardFooter className="flex items-center justify-center">
          <p className="text-xs italic text-stone-500">The future is bright.</p>
        </CardFooter>
      </Card>
    </div>
  );
}
