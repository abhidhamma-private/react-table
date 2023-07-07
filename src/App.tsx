import { useState } from 'react'
import ColumnSizing from './ColumnSizing'
import Pagination from './Pagination'
import ColumnOrdering from './ColumnOrdering'

type Tab = 'ColumnSizing' | 'ColumnOrdering' | 'Pagination'
function App() {
  const [currentTab, setCurrentTab] = useState<Tab>('ColumnSizing')

  const switchTab = (tab: Tab) => {
    if (tab === 'ColumnSizing') return <ColumnSizing />
    if (tab === 'ColumnOrdering') return <ColumnOrdering />
    if (tab === 'Pagination') return <Pagination />

  }

  return (
    <>
      <div>
        <button onClick={() => setCurrentTab('ColumnSizing')}>열너비 드래그로 바꾸기</button>
        <button onClick={() => setCurrentTab('ColumnOrdering')}>컬럼 필터링</button>
        <button onClick={() => setCurrentTab('Pagination')}>페이징</button>
      </div>

      <div>{switchTab(currentTab)}</div>

    </>
  )
}

export default App
