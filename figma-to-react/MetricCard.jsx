import React from 'react';

/**
 * مكون بطاقة المقياس
 * يعرض عنوان المقياس والنص التوضيحي
 */
export default function MetricCard({ title, description }) {
  return (
    <div className="flex flex-col gap-4 p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
      {/* عنوان المقياس */}
      <div className="flex items-center gap-3">
        <h3 className="text-4xl font-semibold text-gray-900 text-right">
          {title}
        </h3>
      </div>

      {/* النص التوضيحي */}
      <p className="text-3xl font-light text-gray-700 opacity-80 text-right leading-relaxed">
        {description}
      </p>
    </div>
  );
}
