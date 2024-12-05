import { SigInData } from "@/interfaces/sigin";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

async function signIn({ username, password }: SigInData) {
  if (username && password) {
    const response = { success: true, username };
    return response;
  }
}

export function useSignIn() {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: signIn,
    onSuccess: (result) => {
      if (result?.success) {
        toast.success(`Bem-vindo ${result.username}`);
        localStorage.setItem("client", result.username);
        navigate("/system/home");
      }
      console.log(result);
    },
    onError: (error) => {
      toast.error(`Erro: ${error.message}`);
    },
  });

  return mutation;
}
