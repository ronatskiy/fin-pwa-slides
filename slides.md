---
# class: text-center
info: |
  ## PWA Workshop
  Покроковий посібник зі створення PWA додатку.
transition: slide-left
authors: | 
  Роман Онацький
  Сергій Місюра
---

<style>
.slidev-layout {
  background-color: #F9EFE6 !important;
}
</style>

<!-- # 🛠️ PWA Workshop -->

# Проєкт: Веб-додаток "Фінансова грамотність"

Створюємо PWA додаток з нуля



---

# 🌐 Що таке Веб-додаток?

Веб-додаток — це сайт, який поводиться як програма.

<div class="grid grid-cols-2 gap-8 mt-8">

<div>

### 📄 Звичайний сайт
<br/>

- Просто показує інформацію (текст, картинки).
- Перезавантажується при кожному кліку.
- Не працює без інтернету.

**Приклад:** Вікіпедія, сайт Новин.

</div>

<div>

### 📱 Веб-додаток (SPA)
<br/>

- Схожий на програму в телефоні.
- **Інтерактивний:** Можна додавати дані, рахувати, грати.
- **Швидкий:** Не перезавантажує сторінку повністю.

**Приклад:** Instagram, Gmail, Google Docs.

</div>

</div>

---

# 🏗️ Як створюють сайти?

Є різні способи створити веб-сторінку.

<div class="grid grid-cols-3 gap-4 mt-8">

<div class="bg-gray-50 p-4 rounded-lg">
  <h3 class="font-bold mb-2">🧱 Цегла за цеглою</h3>
  <p class="text-sm text-gray-600 mb-2">HTML + CSS + JS вручну</p>
  <ul class="text-xs list-disc pl-4">
    <li>Треба писати багато коду</li>
    <li>Важко оновлювати</li>
    <li>Кожна сторінка окремо</li>
  </ul>
</div>

<div class="bg-blue-50 p-4 rounded-lg border-2 border-blue-200">
  <h3 class="font-bold mb-2 text-blue-800">🧩 React-way</h3>
  <p class="text-sm text-blue-600 mb-2">Компоненти</p>
  <ul class="text-xs list-disc pl-4">
    <li>Збираємо з готових блоків</li>
    <li>Легко змінювати</li>
    <li>Один раз написав - всюди використав</li>
  </ul>
</div>

<div class="bg-purple-50 p-4 rounded-lg">
  <h3 class="font-bold mb-2">🤖 CMS</h3>
  <p class="text-sm text-purple-600 mb-2">WordPress, Wix</p>
  <ul class="text-xs list-disc pl-4">
    <li>Без коду</li>
    <li>Обмежені можливості</li>
    <li>Важко зробити щось унікальне</li>
  </ul>
</div>

</div>

<br>

> Ми обрали **React**, бо це стандарт сучасної розробки.

---

# ⚡ Як використовувати React?

Щоб працювати з React, нам потрібен спеціальний інструмент. Які є варіанти?

<div class="grid grid-cols-2 gap-8 mt-8">

<div>

### 🐢 Ручна робота
<br>

- Треба вручну підключати кожен файл скриптів.
- Якщо змінили код - треба оновлювати сторінку.
- Важко керувати тисячами файлів.

</div>

<div>

### ⚡ Vite (наш інструмент)
<br>

- **Автоматизація:** Сам збирає всі файли в один додаток.
- **Миттєве оновлення:** Змінили код -> сайт оновився сам (без перезавантаження).
- **Сучасність:** Розуміє TypeScript та React з коробки.

</div>

</div>

<br>

> **Vite** (франц. "швидко") — це наш "розумний конвеєр", який перетворює код на готовий додаток.



---

# 📱 Що таке PWA?

Ми вже знаємо, що веб-додатки схожі на програми. **PWA (Progressive Web App)** робить їх **справжніми** програмами в яких є наступні функції

<div class="grid grid-cols-3 gap-4 mt-8 text-center">

<div class="bg-blue-50 p-4 rounded-lg">
  <div class="text-4xl mb-2">📥</div>
  <h3 class="font-bold">Встановлення</h3>
  <p class="text-sm">Можна встановити на телефон як звичайну програму (без App Store).</p>
</div>

<div class="bg-green-50 p-4 rounded-lg">
  <div class="text-4xl mb-2">📡</div>
  <h3 class="font-bold">Офлайн</h3>
  <p class="text-sm">Працює навіть коли зник інтернет (як нотатки в телефоні).</p>
</div>

<div class="bg-purple-50 p-4 rounded-lg">
  <div class="text-4xl mb-2">🚀</div>
  <h3 class="font-bold">Швидкість</h3>
  <p class="text-sm">Завантажується миттєво завдяки кешуванню.</p>
</div>

</div>

<br>

> Ми створимо саме такий додаток: він буде працювати без інтернету і його можна буде встановити на телефон.

---

# 📝 Наш застосунок

Орієнтовний дизайн 

<div class="grid grid-cols-3 gap-4 mt-4">
  <img src="/image1.png" class="rounded shadow-lg object-cover h-96" />
  <img src="/image2.png" class="rounded shadow-lg object-cover h-96" />
  <img src="/image3.png" class="rounded shadow-lg object-cover h-96" />
</div>

---

# 📝 Наш застосунок

<div class="grid grid-cols-2 gap-8 items-start">

  <div class="text-left">
    <h3 class="font-bold text-lg mb-4">Особливості додатку</h3>
    <ul class="list-disc pl-6 space-y-2 text-left">
      <li>Трекер витрат</li>
      <li>Планувальник бюджету</li>
      <li>Конвертер валют</li>
      <li>Встановлення PWA (додаток на робочому столі/на головний екран)</li>
      <li>Режим офлайн</li>
    </ul>
  </div>

  <div class="b-1 h-full mb-4">
      <iframe src="https://fin-pwa-123.vercel.app/" style="border:0; width:830px; height:920px; transform:scale(0.5); transform-origin: top left;" title="Live demo: fin-pwa-123" />   
  </div>

</div>
---
layout: center
---

# Переходимо до розробки


---

# Встановлення VS Code

Для розробки нам знадобиться зручний редактор коду.

<div class="grid grid-cols-2 gap-8 mt-8">

<div>

### Чому VS Code?

- **Безкоштовний** та з відкритим кодом.
- **Розумний:** Підсвічує помилки та допомагає писати код.
- **Розширюваний:** Тисячі плагінів для будь-яких задач.
- **Вбудований термінал:** Не треба перемикатися між вікнами.

[Завантажити VS Code](https://code.visualstudio.com/)

</div>

<div class="flex items-center justify-center bg-gray-100 rounded-lg  h-64 w-full shadow-lg">
 <img src="/image4.png" class="rounded object-cover h-64 w-full" />
  
</div>

</div>

---

# 🧩 Рекомендовані розширення

Щоб писати код швидше та зручніше, встановіть ці розширення:

<div class="grid grid-cols-2 gap-8 mt-8">

<div>

### Список розширень:
1. **Prettier** - Автоматично форматує код, щоб він виглядав охайно.
2. **Auto Close Tag** - Автоматично закриває HTML теги.
3. **Auto Rename Tag** - Змінює закриваючий тег, якщо ви змінили відкриваючий.
4. **Live Preview** - Дозволяє бачити зміни на сайті прямо в редакторі.

</div>

<div class="flex items-center justify-center bg-gray-100 rounded-lg h-64 w-full shadow-lg overflow-hidden">
  <img src="/extensions.png" class="object-cover w-full" />
</div>

</div>

---
transition: fade
---

# 📝 Налаштування проекту (1/3)

Створимо проект та встановимо необхідні бібліотеки.

### Створення проекту

<div class="grid grid-cols-2 gap-6 flex-1">
  <div>

Виконуємо наступні кроки:

- Відкриваємо в VS Code папку з проектами
- Створюємо папку `STEMCAMP` і відкриваємо її
- Відкриваємо термінал і вводимо команди

<br>

```bash
npx create-vite@latest my-pwa-app --template react
```
<br>

```bash {lines:true}
cd my-pwa-app
npm install
```

  </div>

  <div class="flex items-center justify-center"> 
    <img src="/terminal1-1.png" class="rounded object-cover" />
  </div>
</div>

---
transition: fade
---

# 📝 Налаштування проекту (2/3)

Встановлення PWA плагіна. Цей плагін зробить наш сайт додатком, що встановлюється.

Для цього в терміналі виконаємо наступну команду:

```bash
npm install vite-plugin-pwa
```

<div> 
  <img src="/terminal2.png" class="rounded object-cover h-36 mt-8" />
</div>


---

# 📝 Налаштування проекту (3/3)

Файл `vite.config.js` — це як паспорт нашого додатку. Тут ми кажемо: "Привіт, я додаток 'Фінанси', у мене біла тема і ось такі іконки".

Давайте сконфігуруємо правильно. Для цього достатньо замінити існуючий файл на цей: 

<div class="h-[320px] overflow-y-auto text-10">

```js {lines:true}
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      devOptions: { enabled: true },
      manifest: {
        name: 'Фінансова Грамотність',
        short_name: 'Фінанси',
        description: 'Навчальний фінансовий додаток',
        theme_color: '#ffffff',
        icons: [{ src: 'pwa-192x192.png', sizes: '192x192', type: 'image/png'},
                { src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png'}
        ]
      }
    })
  ],
})
```

</div>

---
layout: center
---

# Каркас готовий ✅

<br>

Можемо запусти і подивитись, що вийшло

```bash
npm run dev
```

---
layout: center
---

<div class="flex items-center justify-center">

<img src="/preview1.png" class="rounded object-cover h-90" />

</div>

---
layout: center
---

# Давайте додамо стилі

---


# 🎨 Як стилізувати React?

Є два основні шляхи зробити сайт гарним.

<div class="grid grid-cols-2 gap-4 mt-8">

<div class="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
  <h3 class="font-bold mb-4 text-blue-800 text-xl">📄 Звичайний CSS</h3>
  <p class="text-sm text-blue-600 mb-4">Класичний підхід (App.css)</p>
  <ul class="list-disc pl-5 space-y-2">
    <li>Просто і зрозуміло для новачків.</li>
    <li>Повний контроль над виглядом.</li>
    <li>Не потребує додаткових налаштувань.</li>
  </ul>
</div>

<div class="bg-purple-50 p-6 rounded-lg">
  <h3 class="font-bold mb-4 text-purple-800 text-xl">📚 Бібліотеки стилей</h3>
  <p class="text-sm text-purple-600 mb-4">Використання готових інструментів</p>


- [Tailwind CSS](https://tailwindcss.com/) : Швидка верстка через класи.
- [Styled Components](https://styled-components.com/) : Стилі прямо в JS коді.
- [Bootstrap](https://getbootstrap.com/) : Готові компоненти та сітка.
</div>

</div>

<br>

> Ми обрали **Звичайний CSS**, щоб зосередитися на логіці React та PWA, а не на вивченні нових інструментів стилізації.

---

# 🎨 Стилізація (CSS)

CSS — це одяг нашого сайту. Без нього він виглядає як скелет. 

Скопіюйте цей код у `src/App.css`, щоб зробити додаток стильним.

<div class="h-[400px] overflow-y-auto text-xs">

```css
.container { min-height: 100vh; background: #f3f4f6; display: flex; justify-content: center; padding: 1rem; font-family: sans-serif; }
.card { width: 100%; max-width: 480px; background: white; border-radius: 1rem; box-shadow: 0 10px 25px rgba(0,0,0,0.1); overflow: hidden; min-height: 80vh; }
.title { text-align: center; padding: 1.5rem; color: #1f2937; margin: 0; font-size: 1.5rem; }
.nav-tabs { display: flex; background: #f9fafb; border-bottom: 1px solid #e5e7eb; }
.nav-tab { flex: 1; padding: 1rem; border: none; background: none; cursor: pointer; font-weight: 600; color: #6b7280; }
.nav-tab.active { color: #3b82f6; border-bottom: 2px solid #3b82f6; }
.module-container { padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem; }
.input, .select { width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 0.5rem; font-size: 1rem; margin-bottom: 0.5rem; box-sizing: border-box; }
.btn-primary { width: 100%; padding: 0.75rem; background: #3b82f6; color: white; border: none; border-radius: 0.5rem; font-weight: 600; cursor: pointer; }
.result { background: #eff6ff; padding: 1rem; border-radius: 0.5rem; text-align: center; color: #1e40af; }
.expense-item { display: flex; justify-content: space-between; padding: 0.75rem; border-bottom: 1px solid #f3f4f6; }
```

</div>


---

# 🎨 Стилізація (CSS)

Замініть код в `index.css` на цей

<div class="h-[400px] overflow-y-auto text-xs">

```css
:root {
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  min-width: 320px;
  min-height: 100vh;
  background-color: #f3f4f6;
}

#root {
  width: 100%;
  min-height: 100vh;
}

```
</div>

---

# 🧭 Пульт керування (Навігація)

Додаток без меню — як будинок без дверей. 

Створимо кнопки перемикання між екранами у `src/components/Navigation.jsx`.

<div class="h-[340px] overflow-y-auto">

```jsx

export function Navigation({ activeTab, onTabChange }) {
  const tabs = [
    { id: 'expenses', label: 'Витрати', icon: '💰' },
    { id: 'budget', label: 'Бюджет', icon: '📊' },
    { id: 'goals', label: 'Цілі', icon: '🎯' },
    { id: 'converter', label: 'Конвертер', icon: '💱' },
    { id: 'help', label: 'Допомога', icon: '❓' },
  ];

  return (
    <ul className="nav nav-tabs flex-nowrap">
      {tabs.map((tab) => (
        <li key={tab.id} className="nav-item">
          <button
            onClick={() => onTabChange(tab.id)}
            className={`nav-link ${activeTab === tab.id ? 'active' : ''}`}
            aria-current={activeTab === tab.id ? 'true' : undefined}
            title={tab.label}
          >
            {tab.icon}
            <span className="ms-2">{tab.label}</span>
          </button>
        </li>
      ))}
    </ul>
  );
}

```

</div>

---

# 🧠 Пам'ять додатку (Storage)

У браузера є своя маленька "скринька" для даних — `localStorage`. 

Ми створимо файл `src/utils/storage.js`, щоб зручно класти туди дані і діставати їх.

<div class="h-[340px] overflow-y-auto">

```js

export const STORAGE_KEYS = {
  RATES: 'currency_rates_cache',
  EXPENSES: 'expenses_log',
  BUDGET: 'budget_limits',
  GOALS: 'savings_goals',
};

export function getFromStorage(key, defaultValue) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : defaultValue;
  } catch (error) {
    console.error(`Error reading from storage: ${key}`, error);
    return defaultValue;
  }
}

export function saveToStorage(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error(`Error saving to storage: ${key}`, error);
  }
}

export function clearStorage(key) {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(`Error clearing storage: ${key}`, error);
  }
}

export function getAllStorage() {
  const data = {};
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key) {
        const value = localStorage.getItem(key);
        data[key] = value ? JSON.parse(value) : null;
      }
    }
  } catch (error) {
    console.error('Error reading all storage:', error);
  }
  return data;
}

```

</div>

---
layout: center
---

# Переходимо до реалізації модулей. 

Сторінок нашого Веб-додатку

---

# 🧮 Модуль: Витрати


Нумо реалізуємо наш перший модуль

<div class="grid grid-cols-2 gap-2 mt-4">
  <img src="/image1-1.png" class="rounded shadow-lg object-cover h-96" />

  <div class="grid grid-cols-2 gap-8">
    <img src="/image1-2.png" class="rounded shadow-lg object-cover h-96" />
    <img src="/image1-3.png" class="rounded shadow-lg object-cover h-96" />
  </div>
</div>

---

# 🧮 Модуль: Витрати

Як ми аналізуємо витрати?

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="bg-blue-50 p-4 rounded-lg h-64">
  <h3 class="font-bold">Витрати по категорії</h3>

  $$ S_k = \sum_{i=1}^{m} x_i $$

  <p class="text-sm text-gray-600 mt-2">
    (де <i>S<sub>k</sub></i> — сума категорії <i>k</i>, а <i>x<sub>i</sub></i> — окремі витрати в цій категорії)
  </p>
</div>

<div class="bg-green-50 p-4 rounded-lg h-64">
  <h3 class="font-bold">Загальна сума всіх витрат</h3>

  $$ T = \sum_{k=1}^{n} S_k $$

  <p class="text-sm text-gray-600 mt-2">
    (де <i>T</i> — загальний бюджет, який складається із суми всіх категорій <i>S<sub>k</sub></i>)
  </p>
</div>

</div>

---

# 🧮 Модуль: Витрати

#### Створимо для цього модуль `src/components/modules/ExpenseTracker.tsx`.



<div class="h-[360px] overflow-y-auto mt-4">

```jsx

import { useState, useEffect } from 'react';
import { getFromStorage, saveToStorage, STORAGE_KEYS } from '../../utils/storage';

export const CATEGORIES = {
  'Food': '💵 Їжа',
  'Transport': '🚗 Транспорт',
  'Entertainment': '🎮 Розваги',
  'Other': '📌 Інше',
};

export type Category = keyof typeof CATEGORIES;

interface Expense {
  id: string;
  date: string;
  amount: number;
  category: Category;
  description?: string;
}

const emptyExpense: Partial<Expense> = {
  date: getDate(),
  amount: 0,
  category: 'Food',
  description: '',
};

export function ExpenseTracker() {
  const [expenses, setExpenses] = useState<Expense[]>(() => getFromStorage<Expense[]>(STORAGE_KEYS.EXPENSES, []));

  // Збереження витрат до Storage при їх зміні
  useEffect(() => {
    saveToStorage(STORAGE_KEYS.EXPENSES, expenses);
  }, [expenses]);

  // Видалення витрати
  const handleDeleteExpense = (id: string) => {
    if (confirm('Ви впевнені, що хочете видалити цю витрату?')) {
      setExpenses(expenses.filter(exp => exp.id !== id));
    }
  };

  return (
    <div className="module-container expense-tracker">
      <h2 className="module-title">📋 МоЇ витрати</h2>

      {/* Форма додавання витрати */}
      <ExpenseForm onAdd={(payload) => {
        const amount = Number(payload.amount) || 0;
        if (amount <= 0) {
          alert('Введіть коректну суму');
          return false;
        }

        const expense: Expense = {
          id: Date.now().toString(),
          date: payload.date || getDate(),
          amount,
          category: (payload.category as Category) || 'Food',
          description: payload.description,
        };

        setExpenses(prev => [...prev, expense]);
        return true;
      }} />

      {/* Підсумок по категоріях */}
      <ExpenseSummary expenses={expenses} onDelete={handleDeleteExpense} />
    </div>
  );
}

// Форматування дати для відображення
function formatDate(dateStr: string) {
  const date = new Date(dateStr + 'T00:00:00');
  return new Intl.DateTimeFormat('uk-UA', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(date);
}

function getDate() {
  return new Date().toISOString().split('T')[0];
}

export function calculateTotal(items: Expense[]) {
  return items.reduce((sum, exp) => sum + exp.amount, 0);
}
```

</div>

---

# 🧮 Модуль: Витрати

#### Додамо форму вводу даних тобто компонент `ExpenseForm`.



<div class="h-[360px] overflow-y-auto mt-4">

```jsx
/**
 * ExpenseForm — простий компонент форми для додавання нової витрати.
 * Локальний стан форми тримається всередині компонента;
 * при сабміті викликається onAdd(payload), і якщо onAdd повертає true — форма очищається.
 */
export function ExpenseForm({ onAdd }: { onAdd: (payload: Partial<Expense>) => boolean }) {
  const [formValue, setFormValue] = useState<Partial<Expense>>(emptyExpense);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ok = onAdd(formValue);
    if (ok) setFormValue(emptyExpense);
  };
  
  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Дата</label>
          <input
            type="date"
            value={formValue.date}
            onChange={(e) => setFormValue({ ...formValue, date: e.target.value })}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Сума (грн)</label>
          <input
            type="number"
            step="0.01"
            min="0"
            value={formValue.amount || ''}
            onChange={(e) => setFormValue({ ...formValue, amount: parseFloat(e.target.value) || 0 })}
            placeholder="0"
            className="form-input"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Категорія</label>
          <select
            value={formValue.category}
            onChange={(e) => setFormValue({ ...formValue, category: e.target.value as Expense['category'] })}
            className="form-select"
          >
            {Object.entries(CATEGORIES).map(([key, label]) => (
              <option key={key} value={key}>
                {label}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Опис (опц.)</label>
          <input
            type="text"
            value={formValue.description || ''}
            onChange={(e) => setFormValue({ ...formValue, description: e.target.value })}
            placeholder="Деталі..."
            className="form-input"
            maxLength={50}
          />
        </div>
      </div>

      <button type="submit" className="btn btn-primary btn-block">
        + Додати витрату
      </button>
    </form>
  );
}
```

</div>
---

# 🧮 Модуль: Витрати

#### Тепер відображаємо всі введені дані `ExpenseSummary`.



<div class="h-[360px] overflow-y-auto mt-4">

```jsx

/**
 * ExpenseSummary — відображає підсумки: суми по категоріях, загальну суму та детальний список витрат.
 * Props:
 *  - `expenses`: масив витрат
 *  - `onDelete(id)`: callback для видалення витрати
 */
export function ExpenseSummary({ expenses, onDelete }: { expenses: Expense[]; onDelete: (id: string) => void }) {
  const categoryTotals = expenses.reduce((acc, exp) => {
    acc[exp.category] = (acc[exp.category] || 0) + exp.amount;
    return acc;
  }, {} as Record<string, number>);

  const totalAmount = calculateTotal(expenses);

  return (
    <div className="expense-summary">
      <h3 className="summary-title">Загальні витрати по категоріям</h3>

      {expenses.length === 0 ? (
        <div className="empty-state">
          <div className="empty-state-icon">📭</div>
          <p className="empty-state-text">Витрат не знайдено</p>
        </div>
      ) : (
        <>
          <div className="category-breakdown">
            {Object.entries(CATEGORIES).map(([category, label]) => {
              const total = categoryTotals[category] || 0;
              if (total === 0) return null;

              return (
                <div key={category} className="category-item">
                  <div className="category-header">
                    <span className="category-name">{label}</span>
                    <span className="category-amount">{total.toFixed(2)} грн</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="total-row">
            <span>Всього:</span>
            <span className="total-amount">{totalAmount.toFixed(2)} грн</span>
          </div>

          <div className="expenses-list">
            <h4 className="list-title">Деталі витрат</h4>
            <div className="table-container">
              <table className="expenses-table">
                <thead>
                  <tr>
                    <th>Дата</th>
                    <th>Категорія</th>
                    <th>Сума</th>
                    <th>Опис</th>
                    <th>Дія</th>
                  </tr>
                </thead>
                <tbody>
                  {expenses
                    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                    .map((expense) => (
                      <tr key={expense.id}>
                        <td>{formatDate(expense.date)}</td>
                        <td>{CATEGORIES[expense.category]}</td>
                        <td className="amount-cell">{expense.amount.toFixed(2)} грн</td>
                        <td className="description-cell">{expense.description || '—'}</td>
                        <td className="action-cell">
                          <button onClick={() => onDelete(expense.id)} className="btn-delete" title="Видалити">✕</button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
```

</div>

---

# 📊 Модуль: Бюджет

Як не витратити зайвого?

<div class="grid grid-cols-2 gap-2 mt-4 justify-center">
  <img src="/image5.png" class="rounded shadow-lg object-cover h-96" />
  <img src="/image6.png" class="rounded shadow-lg object-cover h-96" />
</div>

---

# 📊 Модуль: Бюджет

Як не витратити зайвого?

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="bg-gray-50 p-6 rounded-lg">

$$ L = \sum_{k=1}^{n} l_k $$

$$ R = L - S $$

<p class="text-sm text-gray-600 mt-4">
  (де <i>L</i> — загальний бюджет (сума лімітів <i>l<sub>k</sub></i>), <i>S</i> — сума витрат, <i>R</i> — залишок)
</p>

</div>

<div class="grid grid-cols-1 gap-4">
  <div class="p-4 border rounded border-green-500 bg-green-50">
    ✅ Якщо <i>S</i> < <i>L</i>
    <div class="text-sm text-gray-600 mt-1">Витрати в межах бюджету</div>
  </div>
  <div class="p-4 border rounded border-red-500 bg-red-50">
    ⚠️ Якщо <i>S</i> > <i>L</i>
    <div class="text-sm text-gray-600 mt-1">Перевитрата бюджету</div>
  </div>
</div>

</div>

---

# 📊 Модуль: Бюджет

Створимо `src/components/modules/BudgetPlanner.tsx`. Це допоможе не витратити все за один день.

<div class="h-[340px] overflow-y-auto">

```tsx
import { useState } from 'react';

export function BudgetPlanner() {
  const [budget, setBudget] = useState(10000);
  const [spent, setSpent] = useState(0);

  return (
    <div className="module-container">
      <h2>📉 Планувальник Бюджету</h2>
      <div className="card">
        <h3>Мій Бюджет: {budget} грн</h3>
        <input 
          type="range" 
          min="0" 
          max={budget} 
          value={spent} 
          onChange={e => setSpent(parseInt(e.target.value))}
          style={{width: '100%'}}
        />
        <p>Витрачено: {spent} грн ({Math.round(spent/budget*100)}%)</p>
      </div>
    </div>
  );
}
```

</div>



---

# 🎯 Модуль: Мрії та цілі

Дизайн

<div class="grid grid-cols-3 gap-2 mt-4 justify-center">
  <img src="/image3-1.png" class="rounded shadow-lg object-cover h-96" />
  <img src="/image3-2.png" class="rounded shadow-lg object-cover h-96" />
  <img src="/image3-3.png" class="rounded shadow-lg object-cover h-96" />
</div>

---

# 🎯 Модуль: Мрії та цілі

Як досягти мрії?

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="bg-purple-50 p-4 rounded-lg">
  <h3 class="font-bold">Прогрес</h3>

  $$ P = \left( \frac{S}{T} \right) \times 100 $$

  <p class="text-sm text-gray-600 mt-2">
    (де <i>P</i> — прогрес у %, <i>S</i> — зібрана сума, <i>T</i> — ціль)
  </p>
</div>

<div class="bg-indigo-50 p-4 rounded-lg">
  <h3 class="font-bold">Залишок</h3>

  $$ R = T - S $$

  <p class="text-sm text-gray-600 mt-2">
    (де <i>R</i> — сума, яку залишилось зібрати для досягнення цілі)
  </p>
</div>

</div>

---

# 🎯 Модуль: Мрії та цілі

На що збираємо? Створимо `src/components/modules/SavingsGoal.tsx`.

<div class="h-[400px] overflow-y-auto">

```tsx
import { useState } from 'react';

export function SavingsGoal() {
  const [goal, setGoal] = useState(5000);
  const [saved, setSaved] = useState(1500);

  return (
    <div className="module-container">
      <h2>🎯 Моя Ціль: Новий Телефон</h2>
      <div className="progress-bar" style={{background: '#e5e7eb', height: '20px', borderRadius: '10px'}}>
        <div style={{
          width: `${(saved/goal)*100}%`, 
          background: '#10b981', 
          height: '100%', 
          borderRadius: '10px',
          transition: 'width 0.5s'
        }}></div>
      </div>
      <p style={{textAlign: 'center', marginTop: '10px'}}>
        Зібрано: {saved} / {goal} грн
      </p>
      <button 
        onClick={() => setSaved(saved + 100)}
        className="btn-primary"
        style={{marginTop: '10px'}}
      >
        + Відкласти 100 грн
      </button>
    </div>
  );
}
```

</div>

---

# 💱 Модуль: Конвертер

Дизайн

<div class="grid  gap-2 mt-4 justify-center">
  <img src="/image4-1.png" class="rounded shadow-lg object-cover h-96" />
</div>

---

# 💱 Модуль: Конвертер

Як ми рахуємо обмін валют? Навчимо наш додаток рахувати.

<div class="bg-gray-50 p-6 rounded-lg text-lg">

Ми використовуємо **крос-курс** через гривню (UAH).

$$ V_{base} = \frac{V_{in}}{R_{in}} $$

$$ V_{out} = V_{base} \times R_{out} $$

<p class="text-sm text-gray-600 mt-4">
  (де <i>V<sub>in</sub></i> — вхідна сума, <i>R<sub>in</sub></i> — курс вхідної валюти, <i>V<sub>base</sub></i> — сума в гривні, <i>R<sub>out</sub></i> — курс вихідної валюти)
</p>

**Приклад:**
Маємо 100 USD. Хочемо EUR.
1. $100 / 0.025 = 4000 \text{ UAH}$
2. $4000 \times 0.023 = 92 \text{ EUR}$

</div>

---

# 💱 Модуль: Конвертер

Створимо `src/components/modules/Converter.tsx`.

<div class="h-[400px] overflow-y-auto">

```tsx
import { useState, useEffect } from 'react';

const FALLBACK_RATES = { UAH: 1, USD: 0.025, EUR: 0.023 };

export function Converter() {
  const [amount, setAmount] = useState(100);
  const [from, setFrom] = useState('UAH');
  const [to, setTo] = useState('USD');
  const [result, setResult] = useState<string | null>(null);
  const [rates, setRates] = useState(FALLBACK_RATES);

  useEffect(() => {
    // Тут буде логіка завантаження курсів
    // Для простоти поки використовуємо FALLBACK_RATES
  }, []);

  useEffect(() => {
    if (rates) {
      const inUAH = amount / rates[from as keyof typeof rates];
      const final = inUAH * rates[to as keyof typeof rates];
      setResult(final.toFixed(2));
    }
  }, [amount, from, to, rates]);

  return (
    <div className="module-container">
      <h2>💱 Конвертер Валют</h2>
      
      <div className="form-group">
        <label>Сума</label>
        <input 
          type="number" 
          value={amount} 
          onChange={e => setAmount(parseFloat(e.target.value))} 
          className="input"
        />
      </div>

      <div className="currency-section">
        <select value={from} onChange={e => setFrom(e.target.value)} className="select">
          {Object.keys(rates).map(c => <option key={c} value={c}>{c}</option>)}
        </select>
        <span>→</span>
        <select value={to} onChange={e => setTo(e.target.value)} className="select">
          {Object.keys(rates).map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      <div className="result">
        <h3>{result} {to}</h3>
      </div>
    </div>
  );
}
```

</div>

---

# 📱 Збираємо все разом (App.tsx)

У нас є всі деталі, тепер зберемо їх разом у головному файлі `src/App.tsx`.

<div class="h-[400px] overflow-y-auto">

```tsx
import { useState } from 'react';
import './App.css';
import { Navigation } from './components/Navigation';
import { Converter } from './components/modules/Converter';
import { ExpenseTracker } from './components/modules/ExpenseTracker';
import { BudgetPlanner } from './components/modules/BudgetPlanner';
import { SavingsGoal } from './components/modules/SavingsGoal';
import { InstallInfo } from './components/modules/InstallInfo';

function App() {
  const [activeTab, setActiveTab] = useState('expenses');

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">💡 Фінансова Грамотність</h1>
        
        <Navigation activeTab={activeTab} onTabChange={setActiveTab} />

        <div className="module-wrapper">
          {activeTab === 'expenses' && <ExpenseTracker />}
          {activeTab === 'budget' && <BudgetPlanner />}
          {activeTab === 'goals' && <SavingsGoal />}
          {activeTab === 'converter' && <Converter />}
        </div>
      </div>
    </div>
  );
}
export default App;
```

</div>

---
layout: center
---

# Майже все готово


---

# 🚀 Активація PWA

Останній крок! Щоб додаток працював офлайн, треба зареєструвати Service Worker у `src/main.tsx`.

<div class="h-[400px] overflow-y-auto">

```tsx {all|10-19}
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode><App /></StrictMode>,
)

// PWA Registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js', { scope: '/' })
      .then(registration => {
        console.log('✅ SW зареєстровано:', registration.scope)
      })
      .catch(error => {
        console.error('❌ SW помилка:', error)
      })
  })
}
```

</div>

---

# 📲 Як встановити додаток?

Наш PWA можна встановити як звичайну програму.

<div class="grid grid-cols-2 gap-8 mt-8">

<div>

### 💻 На комп'ютері (Chrome/Edge)
1. Відкрийте додаток у браузері.
2. У адресному рядку праворуч з'явиться іконка **"Встановити"** (монітор зі стрілкою).
3. Натисніть її та підтвердіть встановлення.
4. Додаток з'явиться на робочому столі!

</div>

<div>

### 📱 На телефоні (Android/iOS)
1. **Android (Chrome):** Натисніть "три крапки" -> "Встановити додаток" або "Додати на головний екран".
2. **iOS (Safari):** Натисніть кнопку "Поділитися" -> "Додати на початковий екран".

</div>

</div>

---
layout: center
---

# Ми впорались 🎉


---

# 🎉 Ти - розробник!

Вітаємо! Ти щойно створив свій власний фінансовий додаток.

### 🎮 Як запустити:
1. `npm run dev` - щоб погратися в браузері.
2. `npm run build` - щоб зібрати фінальну версію.
3. `npx serve dist` - щоб перевірити, як він встановлюється на телефон.

<br>

### 🚀 Що далі?
- Зміни іконки на свої улюблені.
- Додай нові функції (наприклад, графіки).
- Покажи друзям і скажи: "Я це зробив!".
