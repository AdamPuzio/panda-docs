import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

export const Code = ({
  type,
  code,
  children
}) => (
  <TabItem value={type} label={type}>
    <>{code}</>
  </TabItem>
)

export const CodeBlock = ({
  cjs,
  esm,
  ts,
  children,
}) => (

  <Tabs>
    {children}
  </Tabs>
  // <span
  //   style={{
  //     backgroundColor: color,
  //     borderRadius: '2px',
  //     color: '#fff',
  //     padding: '0.2rem',
  //   }}>
  //   {children}
  // </span>
)