import { useState } from "react"
import { PageHeader } from "./layouts/PageHeader"
import styles from "./App.module.css"


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.App}>
      <PageHeader />
    </div>
  );
}

export default App;
