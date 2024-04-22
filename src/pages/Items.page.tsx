import { breadcrumbItems } from '@/Router';
import Breadcrumb from '@/components/navigation/breadcrumb/breadcrumb';
export function Items() {
  return (
    <>
      <Breadcrumb items={breadcrumbItems} variable="link-menu" />
      <p>Items content</p>
    </>
  );
}
