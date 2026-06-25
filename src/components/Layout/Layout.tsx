import styles from './Layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
  centered?: boolean;
  textured?: boolean;
}

export function Layout({ children, centered = false, textured = false }: LayoutProps) {
  return (
    <main
      className={[
        styles.layout,
        centered ? styles.centered : '',
        textured ? styles.textured : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className={styles.container}>{children}</div>
    </main>
  );
}
