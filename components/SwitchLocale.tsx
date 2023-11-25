import { useRouter } from 'next/router';

export default function SwitchLocale() {
  const router = useRouter();
  const { locale } = router;

  const handleLocaleChange = (e: any) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <select onChange={handleLocaleChange} defaultValue={locale}>
      <option value='en-US'>English</option>
      <option value='zh-TW'>TW</option>
    </select>
  );
}
