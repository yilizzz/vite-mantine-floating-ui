import { breadcrumbItems } from '@/Router';
import Breadcrumb from '@/components/navigation/breadcrumb/breadcrumb';

export function Type() {
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <p>Type content</p>
    </>
  );
}
