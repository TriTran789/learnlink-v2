import { checkTokenApi } from "@/apis/auth.api";
import MySidebar from "@/components/MySidebar";
import PATH from "@/constants/PATH";
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const DashboardLayout = () => {
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: checkTokenApi,
    onSuccess: (data) => {
      localStorage.setItem("accessToken", data.accessToken);
    },
    onError: (error) => {
      toast.error(error.message);
      navigate(PATH.HOME);
    },
  });

  useEffect(() => {
    mutate();
  }, []);

  return (
    <main className="h-screen bg-black text-white flex">
      <MySidebar />
      <Outlet />
    </main>
  );
};

export default DashboardLayout;
