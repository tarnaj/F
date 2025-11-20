import React from 'react';
import ReportHeader from './ReportHeader';
import ReportPage from './ReportPage';

/**
 * المكون الرئيسي - تقرير القادة
 * يجمع كل العناصر معاً
 */
export default function LeadershipReport() {
  // بيانات المقاييس الست
  const allMetrics = [
    {
      title: 'المقياس الأول:',
      description: 'النص التوضيحي يكون هنا\nالنص التوضيحي يكون هنا'
    },
    {
      title: 'المقياس الثاني:',
      description: 'النص التوضيحي يكون هنا\nالنص التوضيحي يكون هنا'
    },
    {
      title: 'المقياس الثالث:',
      description: 'النص التوضيحي يكون هنا\nالنص التوضيحي يكون هنا'
    },
    {
      title: 'المقياس الرابع:',
      description: 'النص التوضيحي يكون هنا\nالنص التوضيحي يكون هنا'
    },
    {
      title: 'المقياس الخامس:',
      description: 'النص التوضيحي يكون هنا\nالنص التوضيحي يكون هنا'
    },
    {
      title: 'المقياس السادس:',
      description: 'النص التوضيحي يكون هنا\nالنص التوضيحي يكون هنا'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* الحاوية الرئيسية */}
      <div className="container mx-auto px-4 py-16">
        {/* رأس التقرير */}
        <ReportHeader
          managerName="اسم المدير هنا"
          summary="ملخص عن فكرة التقييم هنا"
        />

        {/* صفحة التقرير مع جميع المقاييس */}
        <ReportPage metrics={allMetrics} />
      </div>
    </div>
  );
}
