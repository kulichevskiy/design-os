# Начало работы

## Клонируйте репозиторий

```bash
git clone https://github.com/buildermethods/design-os.git my-project-design
cd my-project-design
```

Замените `my-project-design` на любое название вашего дизайн-пространства.

## Удалите исходный remote

```bash
git remote remove origin
```

Теперь у вас чистый локальный экземпляр, готовый к использованию.

## Установите зависимости

```bash
npm install
```

## Запустите dev-сервер

```bash
npm run dev
```

Откройте [http://localhost:5173](http://localhost:5173) в браузере.

## Откройте Claude Code

В той же директории проекта запустите Claude Code:

```bash
claude
```

Можно начинать дизайн. Запустите `/product-vision`, чтобы начать формулировать продукт.

---

## Опционально: сохраните как свой шаблон

Если хотите использовать Design OS как шаблон для будущих проектов:

1. Запушьте в свой репозиторий GitHub:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

2. Перейдите в репозиторий на GitHub, откройте **Settings** и включите **Template repository**.

Теперь вы сможете создавать новые экземпляры через кнопку GitHub "Use this template".
