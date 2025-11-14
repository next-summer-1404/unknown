'use client';
import React, { useEffect, useState } from 'react';
import { getComments } from '@/utils/service/api/getComments';
import { IComments, ICommentsData } from '@/types/ICommentCardProps';
import DynamicTable from '@/components/common/table/DynamicTable';

const TableComments: React.FC = () => {
  const columns = [
    { key: 'title', label: 'عنوان' },
    { key: 'caption', label: 'نظر' },
    { key: 'rating', label: 'امتیاز' },
    { key: 'created', label: 'تاریخ ثبت' },
  ];

  const [data, setData] = useState<ICommentsData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: IComments = await getComments();
        setData(Array.isArray(response.data) ? response.data : [response.data]);
      } catch (err) {
        console.error('خطا در دریافت نظرات:', err);
      }
    };
    fetchData();
  }, []);

  const rows = data.map((comment) => ({
    key: comment.id,
    title: comment.title || '—',
    caption: comment.caption || '—',
    rating: comment.rating ? `${comment.rating}/5` : '—',
    created: comment.created_at
      ? new Date(comment.created_at).toLocaleDateString('fa-IR')
      : '—',
  }));

  return (
    <DynamicTable
      title="مدیریت نظرات کاربران"
      columns={columns}
      rows={rows}
      withActions={true} 
      addButtonText="افزودن نظر جدید"
      onAddClick={() => console.log('اینجا منطق افزودن نظر قرار می‌گیرد')}
    />
  );
};

export default TableComments;
