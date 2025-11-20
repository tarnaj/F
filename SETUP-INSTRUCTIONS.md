# تعليمات إعداد Framelink MCP for Figma

## ✅ التثبيت مكتمل!

تم تثبيت وبناء المشروع بنجاح. الآن يمكنك استخدام F MCP لتحويل تصاميم Figma إلى HTML و CSS.

---

## 🔧 كيفية إعداد MCP في Claude Desktop

### الخطوة 1: افتح ملف التكوين

افتح ملف تكوين Claude Desktop:

**على Linux:**
```bash
~/.config/Claude/claude_desktop_config.json
```

**على macOS:**
```bash
~/Library/Application Support/Claude/claude_desktop_config.json
```

**على Windows:**
```bash
%APPDATA%\Claude\claude_desktop_config.json
```

### الخطوة 2: أضف التكوين

أضف المحتوى التالي إلى الملف:

```json
{
  "mcpServers": {
    "Framelink MCP for Figma": {
      "command": "npx",
      "args": ["-y", "figma-developer-mcp", "--figma-api-key=YOUR_FIGMA_API_KEY", "--stdio"]
    }
  }
}
```

**أو استخدم المسار المحلي (أسرع):**
```json
{
  "mcpServers": {
    "Framelink MCP for Figma": {
      "command": "node",
      "args": ["/home/user/F/dist/bin.js", "--figma-api-key=YOUR_FIGMA_API_KEY", "--stdio"]
    }
  }
}
```

**أو استخدم متغير البيئة (أكثر أماناً):**
```json
{
  "mcpServers": {
    "Framelink MCP for Figma": {
      "command": "npx",
      "args": ["-y", "figma-developer-mcp", "--stdio"],
      "env": {
        "FIGMA_API_KEY": "YOUR_FIGMA_API_KEY"
      }
    }
  }
}
```

> **ملاحظة:** استبدل `YOUR_FIGMA_API_KEY` بمفتاح API الخاص بك من Figma. المفتاح الفعلي محفوظ في ملف `claude-mcp-config-ACTUAL.json` (غير مُضمّن في Git).

### الخطوة 3: أعد تشغيل Claude Desktop

أغلق Claude Desktop تماماً ثم افتحه من جديد.

---

## 🎨 كيفية الاستخدام

### 1. احصل على رابط تصميم Figma

افتح ملف Figma وانسخ الرابط من المتصفح. سيكون مثل:
```
https://www.figma.com/file/ABC123/My-Design
```

أو انسخ رابط Frame محدد أو Group معين.

### 2. استخدم مع Claude

في Claude Desktop، الصق الرابط واطلب:

**مثال 1: تحويل كامل**
```
لدي تصميم Figma: https://www.figma.com/file/ABC123/...
قم بتحويل هذا التصميم إلى HTML و CSS بدقة عالية
```

**مثال 2: مع React**
```
https://www.figma.com/file/ABC123/...
حول هذا التصميم إلى مكونات React مع Tailwind CSS
```

**مثال 3: مع Vue**
```
https://www.figma.com/file/ABC123/...
قم بتنفيذ هذا التصميم باستخدام Vue 3 و Composition API
```

**مثال 4: Frame محدد**
```
https://www.figma.com/file/ABC123/...?node-id=123:456
حول هذا الـ Frame إلى HTML/CSS
```

---

## ⚡ مزايا F MCP

- ✅ **دقة عالية جداً**: يحصل على جميع التفاصيل من Figma API
- ✅ **يدعم جميع الأطر**: React, Vue, Angular, Svelte, وأي إطار آخر
- ✅ **One-shot implementation**: تحويل كامل بأمر واحد
- ✅ **Layout دقيق**: يحافظ على المسافات والأحجام بدقة
- ✅ **Styles كاملة**: الألوان، الخطوط، الظلال، وكل شيء
- ✅ **Responsive**: يمكن طلب تصميم متجاوب

---

## 🔐 الأمان

⚠️ **مهم جداً:**
- لا تشارك ملف `.env` مع أحد
- لا تقم بـ commit ملف `.env` إلى Git
- API Key موجود بالفعل في `.gitignore`

---

## 🧪 اختبار MCP

لاختبار أن MCP يعمل بشكل صحيح:

1. افتح Claude Desktop
2. ابدأ محادثة جديدة
3. الصق أي رابط Figma
4. يجب أن يتعرف Claude تلقائياً على الرابط ويجلب البيانات

---

## 📚 موارد إضافية

- **التوثيق الكامل**: https://www.framelink.ai/docs/quickstart
- **فيديو توضيحي**: https://youtu.be/6G9yb-LrEqg
- **الكود المصدري**: `/home/user/F`
- **المستودع الأصلي**: https://github.com/GLips/Figma-Context-MCP

---

## 🐛 استكشاف الأخطاء

### المشكلة: Claude لا يتعرف على روابط Figma

**الحل:**
1. تأكد من إعادة تشغيل Claude Desktop
2. تحقق من ملف التكوين
3. تحقق من أن API Key صحيح

### المشكلة: خطأ في الصلاحيات

**الحل:**
- تحقق من أن Figma API Token صالح
- تأكد من أن لديك صلاحية الوصول للملف
- أعد إنشاء Token إذا لزم الأمر

### المشكلة: MCP لا يعمل

**الحل:**
```bash
# اختبر MCP يدوياً
npx figma-developer-mcp --figma-api-key=YOUR_KEY --stdio
```

---

## 🎓 نصائح للاستخدام الأمثل

1. **استخدم Frames واضحة**: قم بتنظيم تصميمك في Figma بشكل جيد
2. **سمّي العناصر بوضوح**: أسماء جيدة تساعد في إنشاء كود أفضل
3. **استخدم Auto Layout**: يساعد في إنشاء كود Flexbox/Grid صحيح
4. **حدد الـ Frame المطلوب**: بدلاً من الملف كله إذا كنت تريد جزء معين
5. **اطلب تحسينات**: يمكنك طلب إضافة animations، responsiveness، وغيرها

---

🎉 **جاهز للاستخدام!**

الآن يمكنك تحويل أي تصميم Figma إلى كود بدقة لامتناهية!
