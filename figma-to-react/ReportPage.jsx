import React from 'react';
import MetricCard from './MetricCard';

/**
 * مكون صفحة التقرير
 * يعرض مجموعة من المقاييس في شبكة
 */
export default function ReportPage({ metrics }) {
  return (
    <div className="w-full max-w-7xl mx-auto py-12 px-8">
      {/* شبكة المقاييس - 3 أعمدة على الشاشات الكبيرة، عمودين على المتوسطة، عمود واحد على الصغيرة */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {metrics.map((metric, index) => (
          <MetricCard
            key={index}
            title={metric.title}
            description={metric.description}
          />
        ))}
      </div>
    </div>
  );
}
