import React, { useState, useEffect } from "react";
import {
  Table,
  Button,
  Modal,
  Form,
  Input,
  Select,
  Space,
  Popconfirm,
  message,
  Pagination,
  Card,
} from "antd";
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import type { Major } from "../../../common/types/Major";
import {
  getAllMajors,
  createMajor,
  updateMajor,
  softDeleteMajor,
} from "../../../common/services/majorService";

const { Option } = Select;
const { TextArea } = Input;

const MajorManager: React.FC = () => {
  const [majors, setMajors] = useState<Major[]>([]);
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingMajor, setEditingMajor] = useState<Major | null>(null);
  const [form] = Form.useForm();

  // --- bộ lọc + phân trang ---
  const [searchText, setSearchText] = useState("");
  const [sort, setSort] = useState("createdAt");
  const [order, setOrder] = useState<"asc" | "desc">("desc");
  const [status, setStatus] = useState<"active" | "deleted">("active");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState(0);

  // Hàm gọi API
  const fetchMajors = async () => {
    setLoading(true);
    try {
      const res = await getAllMajors({
        search: searchText,
        page: currentPage,
        limit: pageSize,
        sort,
        order,
        includeDeleted: status === "deleted" ? "true" : "false",
      });
      setMajors(res?.data); // array majors
      setTotal(res.meta?.total ?? 0);
    } catch (error) {
      console.error(error);
      message.error("Có lỗi xảy ra khi tải dữ liệu chuyên ngành!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMajors();
  }, [searchText, sort, order, status, currentPage, pageSize]);

  const handleAdd = () => {
    setEditingMajor(null);
    form.resetFields();
    setIsModalVisible(true);
  };

  const handleEdit = (major: Major) => {
    setEditingMajor(major);
    form.setFieldsValue(major);
    setIsModalVisible(true);
  };

  const handleDelete = async (id: string) => {
    try {
      await softDeleteMajor(id);
      message.success("Xóa chuyên ngành thành công!");
      fetchMajors();
    } catch (error) {
      message.error("Có lỗi xảy ra khi xóa chuyên ngành!",error);
    }
  };

  const handleSubmit = async (values: any) => {
    try {
      setLoading(true);
      if (editingMajor) {
        await updateMajor(editingMajor._id, values);
        message.success("Cập nhật chuyên ngành thành công!");
      } else {
        await createMajor(values);
        message.success("Thêm chuyên ngành thành công!");
      }
      setIsModalVisible(false);
      form.resetFields();
      fetchMajors();
    } catch (error) {
      message.error("Có lỗi xảy ra khi lưu chuyên ngành!", error);
    } finally {
      setLoading(false);
    }
  };

  const columns: ColumnsType<Major> = [
    {
      title: "Mã chuyên ngành",
      dataIndex: "code",
      key: "code",
      width: 150,
      render: (text: string) => (
        <span className="font-semibold text-blue-600">{text}</span>
      ),
    },
    {
      title: "Tên chuyên ngành",
      dataIndex: "name",
      key: "name",
      width: 200,
      render: (text: string) => <span className="font-medium">{text}</span>,
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      key: "description",
      ellipsis: true,
      render: (text: string) => <span className="text-gray-600">{text}</span>,
    },
    {
      title: "Ngày tạo",
      dataIndex: "createdAt",
      key: "createdAt",
      width: 150,
      render: (text?: string) =>
        text ? new Date(text).toLocaleDateString("vi-VN") : "-",
    },
    {
      title: "Thao tác",
      key: "actions",
      width: 150,
      render: (_, record: Major) => (
        <Space size="small">
          <Button
            type="text"
            icon={<EyeOutlined />}
            size="small"
            className="text-blue-500 hover:text-blue-700 cursor-pointer"
          />
          <Button
            type="text"
            icon={<EditOutlined />}
            size="small"
            onClick={() => handleEdit(record)}
            className="text-green-500 hover:text-green-700 cursor-pointer"
          />
          <Popconfirm
            title="Xác nhận xóa"
            description="Bạn có chắc chắn muốn xóa chuyên ngành này?"
            onConfirm={() => handleDelete(record._id)}
            okText="Xóa"
            cancelText="Hủy"
            okButtonProps={{ danger: true }}
          >
            <Button
              type="text"
              icon={<DeleteOutlined />}
              size="small"
              className="text-red-500 hover:text-red-700 cursor-pointer"
            />
          </Popconfirm>
        </Space>
      ),
    },
  ];
  console.log(majors)
  return (
    <div className="flex flex-col h-full">
      {/* Header + Filter */}
      <div className="sticky top-0 bg-gray-50 z-10 pb-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold text-gray-900">
            Quản lý Chuyên ngành
          </h1>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={handleAdd}
            size="large"
          >
            Thêm Chuyên ngành mới
          </Button>
        </div>

        {/* Search + filter */}
        <Card className="shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Input
              placeholder="Tìm theo tên hoặc mã chuyên ngành"
              prefix={<SearchOutlined className="text-gray-400" />}
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
                setCurrentPage(1);
              }}
            />
            <Select value={sort} onChange={setSort} className="w-full">
              <Option value="name">Tên chuyên ngành</Option>
              <Option value="code">Mã chuyên ngành</Option>
              <Option value="createdAt">Ngày tạo</Option>
            </Select>
            <Select value={order} onChange={setOrder} className="w-full">
              <Option value="asc">Tăng dần</Option>
              <Option value="desc">Giảm dần</Option>
            </Select>
            <Select
              value={status}
              onChange={(value) => {
                setStatus(value);
                setCurrentPage(1);
              }}
              className="w-full"
            >
              <Option value="active">Đang hoạt động</Option>
              <Option value="deleted">Đã xóa</Option>
            </Select>
          </div>
        </Card>
      </div>

      {/* Table */}
      <div className="flex-1 overflow-x-auto mt-4">
        <Card className="shadow-sm">
          <Table
            columns={columns}
            dataSource={majors}
            loading={loading}
            pagination={false}
            rowKey="_id"
            scroll={{ x: true }}
          />
          <div className="flex justify-between items-center mt-4">
            <div className="text-sm text-gray-600">
              Hiển thị {(currentPage - 1) * pageSize + 1} -{" "}
              {Math.min(currentPage * pageSize, total)} của {total} kết quả
            </div>
            <div className="flex items-center space-x-4">
              <Select
                value={pageSize}
                onChange={(value) => {
                  setPageSize(value);
                  setCurrentPage(1);
                }}
                size="small"
                style={{ width: 80 }}
              >
                <Option value={10}>10</Option>
                <Option value={20}>20</Option>
                <Option value={50}>50</Option>
              </Select>
              <Pagination
                current={currentPage}
                total={total}
                pageSize={pageSize}
                onChange={(page) => setCurrentPage(page)}
                showSizeChanger={false}
                showQuickJumper
                size="small"
              />
            </div>
          </div>
        </Card>
      </div>

      {/* Modal thêm/sửa */}
      <Modal
        title={editingMajor ? "Chỉnh sửa Chuyên ngành" : "Thêm Chuyên ngành mới"}
        open={isModalVisible}
        onCancel={() => {
          setIsModalVisible(false);
          form.resetFields();
        }}
        footer={null}
        width={600}
        destroyOnClose
      >
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            name="name"
            label="Tên chuyên ngành"
            rules={[
              { required: true, message: "Vui lòng nhập tên chuyên ngành!" },
              { min: 2, message: "Tên chuyên ngành phải có ít nhất 2 ký tự!" },
            ]}
          >
            <Input placeholder="Nhập tên chuyên ngành" />
          </Form.Item>

          <Form.Item
            name="description"
            label="Mô tả"
            rules={[
              { required: true, message: "Vui lòng nhập mô tả!" },
              { min: 10, message: "Mô tả phải có ít nhất 10 ký tự!" },
            ]}
          >
            <TextArea
              rows={4}
              placeholder="Nhập mô tả chi tiết về chuyên ngành"
            />
          </Form.Item>

          <div className="flex justify-end space-x-3 pt-4 border-t">
            <Button
              onClick={() => {
                setIsModalVisible(false);
                form.resetFields();
              }}
            >
              Hủy
            </Button>
            <Button type="primary" htmlType="submit" loading={loading}>
              {editingMajor ? "Cập nhật" : "Thêm mới"}
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default MajorManager;
