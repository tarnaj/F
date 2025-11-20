# 📊 تقرير القادة - Leadership Report

تطبيق React محوّل من تصميم Figma إلى كود باستخدام **F MCP** (Framelink MCP for Figma).

## ✨ المميزات

- ✅ **محوّل بدقة من Figma** - تم جلب البيانات مباشرة من Figma API
- ✅ **مكونات React قابلة لإعادة الاستخدام** - مقسّم إلى مكونات منظمة
- ✅ **Tailwind CSS** - أنماط حديثة وسريعة الاستجابة
- ✅ **دعم كامل للعربية (RTL)** - اتجاه من اليمين إلى اليسار
- ✅ **Responsive Design** - يعمل على جميع الشاشات
- ✅ **Vite** - بناء سريع وتطوير فعّال

## 🎨 التصميم الأصلي

**رابط Figma:**
https://www.figma.com/design/dJ61WoBSdJ5ZWzR1W1Spqb/تقرير-القادة-مثال

## 📦 التثبيت

```bash
# تثبيت التبعيات
npm install

# تشغيل خادم التطوير
npm run dev

# بناء للإنتاج
npm run build

# معاينة البناء
npm run preview
```

## 🏗️ هيكل المشروع

```
figma-to-react/
├── App.jsx                 # التطبيق الرئيسي
├── App.css                 # الأنماط العامة
├── main.jsx                # نقطة الدخول
├── index.html              # HTML الرئيسي
├── LeadershipReport.jsx    # المكون الرئيسي للتقرير
├── ReportHeader.jsx        # مكون رأس التقرير
├── ReportPage.jsx          # مكون صفحة التقرير
├── MetricCard.jsx          # مكون بطاقة المقياس
├── package.json            # التبعيات
├── tailwind.config.js      # إعدادات Tailwind
├── vite.config.js          # إعدادات Vite
└── README.md               # هذا الملف
```

## 🎯 المكونات

### 1. `LeadershipReport` - المكون الرئيسي
يجمع كل العناصر معاً ويحتوي على البيانات

### 2. `ReportHeader` - رأس التقرير
- الترحيب باسم المدير
- ملخص التقييم
- شريط أخضر مزخرف

### 3. `ReportPage` - صفحة التقرير
- شبكة المقاييس (Grid Layout)
- Responsive: 3 أعمدة → 2 عمود → عمود واحد

### 4. `MetricCard` - بطاقة المقياس
- عنوان المقياس
- النص التوضيحي
- تصميم بطاقة (Card Design)

## 🎨 الألوان المستخدمة

| اللون | Hex | الاستخدام |
|-------|-----|-----------|
| أخضر زمردي | `#03bb6e` | الشريط العلوي، الألوان الأساسية |
| رمادي داكن | `#0b0b0b` | النصوص الرئيسية |
| رمادي فاتح | `#f9fafb` | الخلفية |

## 📝 الخطوط

- **Amiri** - للعناوين (Serif)
- **Tajawal** - للنصوص (Sans-serif)

## 🔧 التخصيص

### تغيير البيانات

عدّل البيانات في `LeadershipReport.jsx`:

```jsx
const allMetrics = [
  {
    title: 'المقياس الأول:',
    description: 'النص التوضيحي هنا'
  },
  // أضف المزيد...
];
```

### تغيير الألوان

عدّل `tailwind.config.js`:

```js
colors: {
  primary: {
    500: '#03bb6e', // لونك الخاص
  }
}
```

### تغيير الخطوط

عدّل `App.css`:

```css
@import url('رابط خطك هنا');

body {
  font-family: 'خطك', sans-serif;
}
```

## 🚀 النشر

### Vercel
```bash
npm run build
vercel --prod
```

### Netlify
```bash
npm run build
netlify deploy --prod --dir=dist
```

### GitHub Pages
```bash
npm run build
# رفع محتويات dist/ إلى gh-pages
```

## 📊 تحليل البيانات من Figma

تم جلب البيانات التالية من Figma API:

- **6 مقاييس** - كل واحد يحتوي على عنوان ووصف
- **خطوط محددة** - Thmanyah serif display & sans
- **ألوان دقيقة** - RGB colors from design
- **مسافات محددة** - Spacing and layout من التصميم

## 🛠️ التقنيات المستخدمة

- **React 18** - مكتبة واجهة المستخدم
- **Tailwind CSS 3** - إطار عمل CSS
- **Vite** - أداة البناء
- **PostCSS** - معالج CSS
- **Figma API** - جلب البيانات

## 📖 كيف تم التحويل؟

1. ✅ جلب البيانات من Figma API باستخدام Personal Access Token
2. ✅ تحليل هيكل التصميم (Frames, Text, Styles)
3. ✅ استخراج الألوان والخطوط والمسافات
4. ✅ إنشاء مكونات React قابلة لإعادة الاستخدام
5. ✅ تطبيق Tailwind CSS للأنماط
6. ✅ إضافة Responsive Design
7. ✅ دعم RTL للعربية

## 🎓 ملاحظات

- التصميم responsive تلقائياً
- يدعم Dark Mode (يمكن إضافته)
- المكونات قابلة لإعادة الاستخدام
- الكود منظم ونظيف
- تعليقات بالعربية لسهولة الفهم

## 📄 الترخيص

MIT License

## 🤝 المساهمة

مرحباً بالمساهمات! افتح Issue أو Pull Request.

---

**تم التحويل باستخدام:** [F MCP (Framelink MCP for Figma)](https://github.com/tarnaj/F)

🎉 **استمتع ببناء واجهات رائعة من Figma مباشرة!**
