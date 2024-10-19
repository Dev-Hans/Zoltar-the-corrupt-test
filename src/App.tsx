import '@aws-amplify/ui-react/styles.css'
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import BookSearch from './components/BookSearch.tsx';
import styles from './App.module.css';

function App() {
  return (
    <Authenticator>
      {({ signOut }) => (
        <div className={styles.app}>
          <header className={styles.header}>
            <h1>Zoltar's Den</h1>
            <div className={styles.userInfo}>
              <button onClick={signOut} className={styles.signOutButton}>Sign out</button>
            </div>
          </header>
          <main className={styles.main}>
            <BookSearch />
          </main>
        </div>
      )}
    </Authenticator>
  );
}

export default App;