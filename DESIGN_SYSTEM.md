# Portfolio Design System

## 🎨 Color Palette

### Primary linears
- **Main Heading linear**: `from-neutral-400 via-neutral-200 to-neutral-400`
- **Secondary linear**: `from-neutral-500 via-neutral-300 to-neutral-500`
- **Accent Line**: `from-neutral-500 to-neutral-100`
- **Button linear**: `from-neutral-600 to-neutral-700`
- **Button Hover**: `from-neutral-500 to-neutral-600`

### Background Colors
- **Primary Background**: `bg-black`
- **Card Background**: `from-neutral-900 to-black`
- **Overlay**: `bg-neutral-900/30` with `backdrop-blur-md`

### Text Colors
- **Primary Text**: `text-neutral-100` / `text-neutral-200`
- **Secondary Text**: `text-neutral-300`
- **Muted Text**: `text-neutral-400`
- **Very Muted**: `text-neutral-500`

### Borders
- **Primary Border**: `border-neutral-800`
- **Hover Border**: `border-neutral-600`
- **Accent Border**: `border-neutral-500`

### Social Media Colors
- **GitHub**: `text-neutral-300` → `hover:text-white`
- **LinkedIn**: `text-blue-500` → `hover:text-blue-400`
- **Email**: `text-red-500` → `hover:text-red-400`
- **WhatsApp**: `text-green-500` → `hover:text-green-400`

---

## 📏 Typography Scale

### Headings
```jsx
// Main Hero (H1)
className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black"

// Section Titles (H2)
className="text-5xl md:text-6xl lg:text-7xl font-bold"

// Subsection Titles (H3)
className="text-3xl md:text-4xl lg:text-5xl font-bold"

// Card Titles
className="text-3xl font-bold"

// Small Headings (H4)
className="text-lg font-semibold"
```

### Body Text
```jsx
// Large Body
className="text-lg sm:text-xl md:text-2xl leading-relaxed"

// Medium Body
className="text-lg md:text-xl leading-relaxed"

// Regular Body
className="text-lg leading-relaxed"

// Small Text
className="text-sm"
```

---

## 🎭 Component Patterns

### Section Header Pattern
```jsx
<div className="text-center mb-16">
  <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-linear-to-r from-neutral-400 via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
    Section Title
  </h2>
  <div className="w-24 h-1 bg-linear-to-r from-neutral-500 to-neutral-100 mx-auto rounded-full"></div>
</div>
```

### Card Pattern
```jsx
<div className="bg-linear-to-br from-neutral-900 to-black border border-neutral-800 rounded-2xl p-8 hover:border-neutral-600 transition-all duration-500 shadow-2xl hover:shadow-neutral-500/20">
  {/* Card Content */}
</div>
```

### Button Primary
```jsx
<motion.a
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="flex items-center gap-2 bg-linear-to-r from-neutral-600 to-neutral-700 hover:from-neutral-500 hover:to-neutral-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-neutral-500/30"
>
  Button Text
</motion.a>
```

### Button Secondary (Outline)
```jsx
<motion.a
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="flex items-center gap-2 border-2 border-neutral-600 text-neutral-200 hover:bg-neutral-600/20 hover:border-neutral-500 px-8 py-3 rounded-xl font-semibold transition-all duration-300"
>
  Button Text
</motion.a>
```

### Tag/Badge Pattern
```jsx
<span className="bg-linear-to-br from-neutral-800 to-neutral-900 text-neutral-200 px-4 py-2 rounded-lg text-sm border border-neutral-700/50 hover:border-neutral-500/50 hover:shadow-lg hover:shadow-neutral-500/10 transition-all duration-300">
  Tag Text
</span>
```

---

## ✨ Animation Patterns

### Framer Motion Variants
```jsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};
```

### Hover Animations
- **Scale Up**: `whileHover={{ scale: 1.05 }}`
- **Scale Down**: `whileTap={{ scale: 0.95 }}`
- **Image Zoom**: `group-hover:scale-110` with `transition-transform duration-700`

---

## 🌟 Background Decorations

### linear Overlay
```jsx
<div className="absolute inset-0 bg-linear-to-b from-transparent via-neutral-950/5 to-transparent"></div>
```

### Floating Orbs
```jsx
<div className="absolute top-40 left-10 w-96 h-96 bg-neutral-500/5 rounded-full blur-3xl"></div>
<div className="absolute bottom-40 right-10 w-96 h-96 bg-neutral-600/5 rounded-full blur-3xl"></div>
```

### Animated Background (Hero)
```jsx
<div className="absolute inset-0 bg-linear-to-br from-neutral-900 via-black to-neutral-900 opacity-80"></div>
<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neutral-500/10 rounded-full blur-3xl animate-pulse"></div>
```

---

## 🎯 Spacing System

### Section Padding
- **Top/Bottom**: `py-20`
- **Left/Right**: `px-4 sm:px-6 lg:px-8`

### Component Gaps
- **Small Gap**: `gap-2` or `gap-3`
- **Medium Gap**: `gap-6` or `gap-8`
- **Large Gap**: `gap-10` or `gap-12`

### Margins
- **Section Bottom**: `mb-16` or `mb-20`
- **Element Spacing**: `mt-4`, `mb-6`, etc.

---

## 🖼️ Image Styling

### Profile Image with Glow
```jsx
<div className="relative group">
  <div className="absolute -inset-1 bg-linear-to-r from-neutral-500 to-neutral-300 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
  <img
    src={image}
    className="relative rounded-full w-48 sm:w-60 md:w-64 lg:w-72 xl:w-80 h-48 sm:h-60 md:h-64 lg:h-72 xl:h-80 object-cover shadow-2xl border-4 border-neutral-800"
  />
</div>
```

### Project Image Card
```jsx
<div className="relative bg-linear-to-br from-neutral-900 to-black border border-neutral-800 rounded-2xl p-5 group-hover:border-neutral-600 transition-all duration-500 shadow-2xl">
  <div className="relative overflow-hidden rounded-xl">
    <img className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110" />
  </div>
</div>
```

---

## 📱 Responsive Breakpoints

- **Mobile**: Base styles
- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px

### Common Responsive Patterns
```jsx
// Text sizing
className="text-5xl md:text-6xl lg:text-7xl"

// Padding
className="px-4 sm:px-6 lg:px-8"

// Grid
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"

// Flex direction
className="flex flex-col md:flex-row"
```

---

## 🎨 Complete Component Examples

### Header
- Height: `h-20`
- Sticky with blur: `sticky top-0 z-50 backdrop-blur-sm`
- Border: `border-b border-neutral-800/50`

### Main Hero
- Full screen: `h-screen`
- Animated background with floating orbs
- Large linear text with supporting subtitle

### Section Components
- Consistent header pattern
- Background decorations
- Proper spacing and max-width containers

### Cards
- linear backgrounds
- Border animations on hover
- Shadow effects
- Smooth transitions

---

## 💡 Best Practices

1. **Consistency**: Always use the defined linears and color patterns
2. **Spacing**: Maintain consistent spacing using the defined system
3. **Animations**: Keep animations smooth (300-500ms duration)
4. **Hover States**: Always provide visual feedback on interactive elements
5. **Accessibility**: Maintain good contrast ratios
6. **Responsive**: Test all breakpoints
7. **Performance**: Use transform and opacity for animations

---

## 🚀 Quick Reference

### Most Used Classes
```
// Backgrounds
bg-black
bg-linear-to-br from-neutral-900 to-black

// Borders
border border-neutral-800
hover:border-neutral-600

// Text
text-neutral-200
text-neutral-300
text-neutral-400

// linears
bg-linear-to-r from-neutral-400 via-neutral-200 to-neutral-400 bg-clip-text text-transparent

// Spacing
py-20 px-4 sm:px-6 lg:px-8
gap-8
mb-16

// Shadows
shadow-2xl
hover:shadow-neutral-500/20

// Transitions
transition-all duration-300
transition-all duration-500
```

---

This design system ensures a cohesive, professional, and visually stunning portfolio! ✨
