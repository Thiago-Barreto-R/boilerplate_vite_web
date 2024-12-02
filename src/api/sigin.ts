import { SigInData } from "@/interfaces/sigin";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { toast } from "sonner";

async function signIn({ username, password }: SigInData) {
  if (username && password) {
    const response = { success: true };

    if (response.success) {
      toast.success("Bem-vindo");

      localStorage.setItem("client", username);
      return response;
    } else {
      toast.error("Erro ao fazer login.");
    }
  } else {
    toast.info("Preencha os campos, pfvr.");
  }
}

export function useSignIn() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: signIn,
    onSuccess: () => {
      queryClient.invalidateQueries(["user"]);
    },
    onError: (error) => {
      toast.error(`Erro: ${error.message}`);
    },
  });

  return mutation;
}
