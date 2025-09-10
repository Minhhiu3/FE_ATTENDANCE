import React, { useState } from "react";
import { Card, List, Button, Typography } from "antd";
import { ClockCircleOutlined, PlusOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const initialEvents = [
  { id: 1, title: "Họp dự án", time: "09:00 - 10:00" },
  { id: 2, title: "Gặp khách hàng", time: "13:30 - 14:30" },
  { id: 3, title: "Review code", time: "16:00 - 17:00" },
];

const Schedule: React.FC = () => {
  const [events, setEvents] = useState(initialEvents);

  const addEvent = () => {
    const newEvent = {
      id: events.length + 1,
      title: "Sự kiện mới",
      time: "18:00 - 19:00",
    };
    setEvents([...events, newEvent]);
  };

  return (
    <div className="p-4">
      <Card
        title={<Title level={4}>📅 Lịch biểu</Title>}
        extra={
          <Button type="primary" icon={<PlusOutlined />} onClick={addEvent}>
            Thêm
          </Button>
        }
        className="shadow-md rounded-xl"
      >
        <List
          dataSource={events}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<ClockCircleOutlined style={{ fontSize: 20 }} />}
                title={<Text strong>{item.title}</Text>}
                description={<Text type="secondary">{item.time}</Text>}
              />
            </List.Item>
          )}
        />
      </Card>
    </div>
  );
};

export default Schedule;
