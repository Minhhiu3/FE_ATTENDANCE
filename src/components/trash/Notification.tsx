import React, { useState } from "react";
import { Card, List, Badge, Button, Typography } from "antd";
import { BellOutlined, CheckCircleOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const initialNotifications = [
  { id: 1, message: "Bạn có đơn hàng mới", read: false },
  { id: 2, message: "Sản phẩm A sắp hết hàng", read: false },
  { id: 3, message: "Khách hàng B đã thanh toán", read: true },
];

const Notifications: React.FC = () => {
  const [notifications, setNotifications] = useState(initialNotifications);

  const markAsRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  return (
    <div className="p-4">
      <Card
        title={<Title level={4}>🔔 Thông báo</Title>}
        extra={
          <Button
            type="primary"
            icon={<CheckCircleOutlined />}
            onClick={markAllAsRead}
          >
            Đánh dấu tất cả đã đọc
          </Button>
        }
        className="shadow-md rounded-xl"
      >
        <List
          dataSource={notifications}
          renderItem={(item) => (
            <List.Item
              actions={[
                !item.read && (
                  <Button
                    type="link"
                    size="small"
                    onClick={() => markAsRead(item.id)}
                  >
                    Đánh dấu đã đọc
                  </Button>
                ),
              ]}
            >
              <List.Item.Meta
                avatar={
                  <Badge dot={!item.read}>
                    <BellOutlined style={{ fontSize: 20 }} />
                  </Badge>
                }
                title={<Text strong>{item.message}</Text>}
              />
            </List.Item>
          )}
        />
      </Card>
    </div>
  );
};

export default Notifications;
