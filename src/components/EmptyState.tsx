import { FileText, Map, ClipboardList, Database, Layout, Package, Boxes, Palette, PanelLeft } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

type EmptyStateType = 'overview' | 'roadmap' | 'spec' | 'data' | 'screen-designs' | 'data-model' | 'design-system' | 'shell' | 'export'

interface EmptyStateProps {
  type: EmptyStateType
}

const config: Record<EmptyStateType, {
  icon: typeof FileText
  title: string
  command: string
  description: string
}> = {
  overview: {
    icon: FileText,
    title: 'Продукт еще не описан',
    command: '/product-vision',
    description: 'Опишите видение продукта, ключевые проблемы и возможности',
  },
  roadmap: {
    icon: Map,
    title: 'Дорожная карта еще не задана',
    command: '/product-roadmap',
    description: 'Разбейте продукт на разделы разработки',
  },
  spec: {
    icon: ClipboardList,
    title: 'Спецификация еще не создана',
    command: '/shape-section',
    description: 'Определите пользовательские сценарии и требования к интерфейсу',
  },
  data: {
    icon: Database,
    title: 'Примерные данные еще не сгенерированы',
    command: '/sample-data',
    description: 'Создайте реалистичные примеры данных для дизайнов экранов',
  },
  'screen-designs': {
    icon: Layout,
    title: 'Дизайны экранов еще не созданы',
    command: '/design-screen',
    description: 'Создайте дизайн экранов для этого раздела',
  },
  'data-model': {
    icon: Boxes,
    title: 'Модель данных еще не задана',
    command: '/data-model',
    description: 'Определите ключевые сущности и связи',
  },
  'design-system': {
    icon: Palette,
    title: 'Дизайн-токены еще не заданы',
    command: '/design-tokens',
    description: 'Выберите цвета и типографику для продукта',
  },
  shell: {
    icon: PanelLeft,
    title: 'Оболочка приложения еще не создана',
    command: '/design-shell',
    description: 'Спроектируйте навигацию и компоновку',
  },
  export: {
    icon: Package,
    title: 'Готово к экспорту',
    command: '/export-product',
    description: 'Сгенерируйте полный пакет передачи',
  },
}

export function EmptyState({ type }: EmptyStateProps) {
  const { icon: Icon, title, command, description } = config[type]

  return (
    <Card className="border-stone-200 dark:border-stone-700 shadow-sm border-dashed">
      <CardContent className="py-8">
        <div className="flex flex-col items-center text-center max-w-sm mx-auto">
          <div className="w-10 h-10 rounded-full bg-stone-100 dark:bg-stone-800 flex items-center justify-center mb-3">
            <Icon className="w-5 h-5 text-stone-400 dark:text-stone-500" strokeWidth={1.5} />
          </div>
          <h3 className="text-base font-medium text-stone-600 dark:text-stone-400 mb-1">
            {title}
          </h3>
          <p className="text-sm text-stone-500 dark:text-stone-400 mb-4">
            {description}
          </p>
          <div className="bg-stone-100 dark:bg-stone-800 rounded-md px-4 py-2.5 w-full">
            <p className="text-xs text-stone-500 dark:text-stone-400 mb-0.5">
              Запустите в Claude Code:
            </p>
            <code className="text-sm font-mono text-stone-700 dark:text-stone-300">
              {command}
            </code>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
