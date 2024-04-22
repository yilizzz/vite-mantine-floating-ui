import { breadcrumbItems } from '@/Router';
import Breadcrumb from '@/components/navigation/breadcrumb/breadcrumb';

export function Subcategory() {
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <p>Subcategory content</p>
    </>
  );
}
