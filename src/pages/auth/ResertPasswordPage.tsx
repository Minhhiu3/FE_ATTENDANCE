import { useMutation } from "@tanstack/react-query";
import { useParams, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { resertPasswordSchema, type resertPasswordFormData } from "../../common/schemas/authSchemas";
import { zodResolver } from "@hookform/resolvers/zod";

export default function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();

  const { mutate, isPending, error } = useMutation({
    mutationFn: async (newPassword: string) => {
      const res = await fetch(`/api/auth/reset-password/${token}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ newPassword }),
      });
      if (!res.ok) throw new Error("Lỗi đặt lại mật khẩu");
      return res.json();
    },
    onSuccess: (data) => {
      alert(data.message || "Cập nhật mật khẩu thành công!");
      navigate("/login");
    },
    onError: (err: any) => {
      alert(err?.message || "Cập nhật mật khẩu thất bại. Vui lòng thử lại!");
    },
  });

  const { control, handleSubmit, formState: { errors } } = useForm<resertPasswordFormData>({
    resolver: zodResolver(resertPasswordSchema),
    defaultValues: {
      password: "",
    },  
  });

  const onSubmit = (data: resertPasswordFormData) => {
    mutate(data.password);
  }

  return (
    <form 
      onSubmit={handleSubmit(onSubmit)} 
      className="max-w-md mx-auto mt-10 p-6 border rounded-xl shadow space-y-4"
    >
      <h2 className="text-xl font-semibold text-center">Đặt lại mật khẩu</h2>

      {/* input password */}
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <input
            {...field}
            type="password"
            placeholder="Mật khẩu mới"
            className="w-full p-2 border rounded"
          />
        )}
      />
      {errors.password && (
        <p className="text-red-500 text-sm">{errors.password.message}</p>
      )}

      <button 
        type="submit" 
        disabled={isPending}
        className="w-full bg-purple-600 text-white p-2 rounded hover:bg-purple-700 disabled:opacity-50"
      >
        {isPending ? "Đang cập nhật..." : "Cập nhật mật khẩu"}
      </button>
    </form>
  );
}
