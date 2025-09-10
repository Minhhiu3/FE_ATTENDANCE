/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  LockOutlined,
  MailOutlined
} from "@ant-design/icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import {
  Button,
  Card,
  Col,
  Form,
  Input,
  message,
  Row,
  Typography,
} from "antd";
import { Controller, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/h3z_logo.png";
import {
  loginSchema,
  type LoginFormData,
} from "../../common/schemas/authSchemas";
import { loginUser } from "../../common/services/authService";
import { RoleEnum } from "../../common/types/index";

const { Title, Text } = Typography;

const LoginPage = () => {
  const navigate = useNavigate();
  const { mutate, isPending } = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      message.success("Đăng nhập thành công!");
      const { user,accessToken,refreshToken } = data.data;
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      switch (data.data.user.role) {
        case RoleEnum.SUPER_ADMIN:
          navigate("/admin/users");
          break;
        case RoleEnum.TEACHER:
          navigate("/teacher/attendance");
          break;
        case RoleEnum.STUDENT:
          navigate("/student/classes");
          break;
        default:
          throw new Error("Vai trò không hợp lệ");
      }
    },
    onError: (err: any) => {
      message.error(err?.message || "Đăng nhập thất bại. Vui lòng thử lại!");
    },
  });
  const {
    control, handleSubmit, formState:{ errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginFormData) => {
    mutate({
      email: data.email,
      password: data.password,
    })
  };

  return (
    <Row
      justify="center"
      align="middle"
      style={{
        minHeight: "100vh",
        padding: "24px",
        overflow: "hidden", // tránh scroll dọc trên desktop
      }}
    >
      {/* Logo bên trái (desktop), trên (mobile) */}
      <Col
        xs={24}
        md={12}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 32,
        }}
      >
        <div style={{ textAlign: "center" }}>
          <img
            src={logo}
            alt="h3z Logo"
            style={{
              width: "200px",
              maxWidth: "100%",
              marginBottom: 24,
            }}
          />
          <div className="hidden md:block">
            <Title level={3} style={{ marginBottom: 8, color: "#1f1f1f" }}>
              abcd
            </Title>
            <Text style={{ color: "#595959" }}>
              xyz
            </Text>
          </div>
        </div>
      </Col>

      {/* Form bên phải */}
      <Col
        xs={24}
        md={12}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card
          style={{
            boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
            borderRadius: 12,
            maxWidth: 420, // form gọn lại
            width: "100%",
          }}
          styles={{body: { padding: 24 }}}
        >
          <div style={{ textAlign: "center", marginBottom: 16 }}>
            <Title level={3} style={{ marginBottom: 4, color: "#1f1f1f" }}>
              Tạo tài khoản
            </Title>
            <Text style={{ color: "#595959" }}>
              Điền thông tin để bắt đầu học tập
            </Text>
          </div>

          <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>

            {/* Email */}
            <Form.Item
              label={<Text strong>Email</Text>}
              validateStatus={errors.email ? "error" : ""}
              help={errors.email?.message}
            >
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <Input
                    prefix={<MailOutlined style={{ color: "#bfbfbf" }} />}
                    placeholder="your.email@example.com"
                    {...field}
                  />
                )}
              />
            </Form.Item>

            {/* Password */}
            <Form.Item
              label={<Text strong>Mật khẩu</Text>}
              validateStatus={errors.password ? "error" : ""}
              help={errors.password?.message}
            >
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <Input.Password
                    prefix={<LockOutlined style={{ color: "#bfbfbf" }} />}
                    placeholder="Tối thiểu 8 ký tự"
                    {...field}
                  />
                )}
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={isPending}
                block
                style={{
                  height: 40,
                  background: "var(--gradient)",
                  border: "none",
                }}
              >
                {isPending ? "Đang xử lý..." : "Tạo tài khoản"}
              </Button>
            </Form.Item>

            <div style={{ textAlign: "center", marginBottom: 8 }}>
              <Text>
                 Bạn chưa có tài khoản?{" "}
                <Link to="/register" style={{ color: "#1890ff" }}>
                  Đăng ký
                </Link>
              </Text>
 <br />
 <br />
               <Text>
                <Link to="/forgot-password" style={{ color: "#1890ff" }}>
                  Quên mật khẩu?
                </Link>
              </Text>
            </div>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default LoginPage;
