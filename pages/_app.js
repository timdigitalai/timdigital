import '../app/globals.css';
import DashboardLayout from '../components/layout/DashboardLayout';

function MyApp({ Component, pageProps, router }) {
  // Check if the current page is in the dashboard
  const isDashboardPage = router.pathname.startsWith('/dashboard');

  if (isDashboardPage) {
    return (
      <DashboardLayout>
        <Component {...pageProps} />
      </DashboardLayout>
    );
  }

  // For non-dashboard pages, render without the dashboard layout
  return <Component {...pageProps} />;
}

export default MyApp; 