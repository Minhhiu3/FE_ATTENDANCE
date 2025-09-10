import { useMutation } from "@tanstack/react-query";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, Link } from "react-router-dom";
import {
  Form,
  Input,
  Button,
  Card,
  Typography,
  Alert,
  message,
  Row,
  Col,
} from "antd";
import {
  MailOutlined,
  LockOutlined,
  PhoneOutlined,
  BookOutlined,
} from "@ant-design/icons";
import logo from "../../assets/h3z_logo.png";
import { registerUser } from "../../common/services/authService";
import {
  registerSchema,
  type RegisterFormData,
} from "../../common/schemas/authSchemas";
import { RoleEnum } from "../../common/types/index";

const { Title, Text } = Typography;

const RegisterPage = () => {
  const navigate = useNavigate();
  const { mutate, isPending, error } = useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      message.success("Đăng ký thành công! Vui lòng đăng nhập.");
      navigate("/login");
    },
    onError: (err: any) => {
      message.error(err?.message || "Đăng ký thất bại. Vui lòng thử lại!");
    },
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
      fullname: "",
      username: "",
    },
  });

  const onSubmit = (data: RegisterFormData) => {
    mutate({
      role: RoleEnum.STUDENT,
      email: data.email,
      password: data.password,
      fullname: data.fullname,
      username: data.username,
      phone: data.phoneNumber || undefined,
    });
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
          bodyStyle={{ padding: 24 }}
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
            {/* Họ và tên */}
            <Form.Item
              label={<Text strong>Họ và tên</Text>}
              validateStatus={errors.fullname ? "error" : ""}
              help={errors.fullname?.message}
            >
              <Controller
                name="fullname"
                control={control}
                render={({ field }) => (
                  <Input
                    prefix={<BookOutlined style={{ color: "#bfbfbf" }} />}
                    placeholder="Nhập họ và tên"
                    {...field}
                  />
                )}
              />
            </Form.Item>

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

            {/* Username */}
            <Form.Item
              label={<Text strong>Tên đăng nhập</Text>}
              validateStatus={errors.username ? "error" : ""}
              help={errors.username?.message}
            >
              <Controller
                name="username"
                control={control}
                render={({ field }) => (
                  <Input
                    prefix={<BookOutlined style={{ color: "#bfbfbf" }} />}
                    placeholder="Nhập tên đăng nhập"
                    {...field}
                  />
                )}
              />
            </Form.Item>

            {/* Phone */}
            <Form.Item
              label={<Text strong>Số điện thoại</Text>}
              validateStatus={errors.phoneNumber ? "error" : ""}
              help={errors.phoneNumber?.message}
            >
              <Controller
                name="phoneNumber"
                control={control}
                render={({ field }) => (
                  <Input
                    prefix={<PhoneOutlined style={{ color: "#bfbfbf" }} />}
                    placeholder="0123 456 789"
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

            {/* Confirm password */}
            <Form.Item
              label={<Text strong>Xác nhận mật khẩu</Text>}
              validateStatus={errors.confirmPassword ? "error" : ""}
              help={errors.confirmPassword?.message}
            >
              <Controller
                name="confirmPassword"
                control={control}
                render={({ field }) => (
                  <Input.Password
                    prefix={<LockOutlined style={{ color: "#bfbfbf" }} />}
                    placeholder="Nhập lại mật khẩu"
                    {...field}
                  />
                )}
              />
            </Form.Item>

            {error && (
              <Alert
                message={error.message}
                type="error"
                showIcon
                style={{ marginBottom: 16 }}
              />
            )}

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
                Đã có tài khoản?{" "}
                <Link to="/login" style={{ color: "#1890ff" }}>
                  Đăng nhập
                </Link>
              </Text>
            </div>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default RegisterPage;
