import { PageHeader } from '@/components/ui/PageHeader';
import { Wrapper } from '@/components/ui/wrapper';
import { NextPage } from 'next';
import { Shop } from './_component/Shop';
import { getProducts, getTotalProducts } from '@/actions/data.action';

interface Props {}

const page = async ({
  searchParams,
}: {
  searchParams?: {
    page?: string;
  };
}) => {
  const currentPage = Number(searchParams?.page) || 1;
  const productsData = getProducts(currentPage);
  const countData = getTotalProducts();

  const [products, count] = await Promise.all([productsData, countData]);
  return (
    <Wrapper>
      <PageHeader title="Shop" />
      <Shop products={products} count={count} />
    </Wrapper>
  );
};

export default page;
