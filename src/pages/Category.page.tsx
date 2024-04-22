import { breadcrumbItems } from '@/Router';
import Breadcrumb from '@/components/navigation/breadcrumb/breadcrumb';
export function Category() {
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <p>Category content</p>
    </>
  );
}
