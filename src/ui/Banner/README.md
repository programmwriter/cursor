# Banner Component

## Browser Support for Container Queries

Container Queries поддерживаются в следующих браузерах:

- Chrome: 105+ ✅
- Edge: 105+ ✅
- Firefox: 110+ ✅
- Safari: 16.0+ ✅
- Opera: 91+ ✅
- iOS Safari: 16.0+ ✅
- Android Browser: 105+ ✅

## Fallback Solution

Для браузеров, которые не поддерживают Container Queries, можно использовать следующий fallback:

```css
/* Fallback для старых браузеров */
@supports not (container-type: inline-size) {
  .banner {
    /* Десктопная версия по умолчанию */
  }
  
  @media (max-width: 1024px) {
    .banner {
      /* Мобильная версия */
    }
  }
}
```

## Проверка поддержки

Вы можете проверить поддержку Container Queries в браузере с помощью JavaScript:

```javascript
if (CSS.supports('container-type: inline-size')) {
  console.log('Container Queries поддерживаются');
} else {
  console.log('Container Queries не поддерживаются');
}
```

## Полезные ссылки

- [Can I Use Container Queries](https://caniuse.com/css-container-queries)
- [MDN Container Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Container_Queries)
- [Container Queries Explainer](https://github.com/WICG/container-queries) 