import React from 'react';

/**
 * مكون رأس التقرير
 * يعرض الترحيب واسم المدير مع ملخص التقييم
 */
export default function ReportHeader({ managerName, summary }) {
  return (
    <div className="w-full flex flex-col gap-4 mb-12">
      {/* شريط علوي أخضر مزخرف */}
      <div className="w-full h-20 bg-gradient-to-r from-emerald-500 to-green-400 opacity-90 rounded-lg" />

      {/* عنوان الترحيب */}
      <h1 className="text-7xl font-medium text-gray-900 text-right">
        أهلاً {managerName}
      </h1>

      {/* ملخص التقييم */}
      <p className="text-4xl font-light text-gray-700 opacity-80 text-right max-w-full">
        {summary}
      </p>
    </div>
  );
}
