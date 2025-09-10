import { SearchOutlined } from '@ant-design/icons'
import { Card, Input, Select } from 'antd'
import React from 'react'

const FilterTable = () => {
  return (
    <>
            <Card className="shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Input
              placeholder="Tìm theo tên hoặc mã chuyên ngành"
              prefix={<SearchOutlined className="text-gray-400" />}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <Select value={sortBy} onChange={setSortBy} className="w-full">
              <Option value="name">Tên chuyên ngành</Option>
              <Option value="code">Mã chuyên ngành</Option>
              <Option value="createdAt">Ngày tạo</Option>
            </Select>
            <Select value={sortOrder} onChange={setSortOrder} className="w-full">
              <Option value="asc">Tăng dần</Option>
              <Option value="desc">Giảm dần</Option>
            </Select>
            <Select
              value={statusFilter}
              onChange={setStatusFilter}
              className="w-full"
            >
              <Option value="active">Đang hoạt động</Option>
              <Option value="deleted">Đã xóa</Option>
            </Select>
          </div>
        </Card>
    </>
  )
}

export default FilterTable