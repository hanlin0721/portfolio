import {
  Suspense,
  useEffect,
  useState,
  cloneElement,
  PropsWithChildren,
} from 'react';
import Lottie from 'react-lottie';
import LoadingJosn from '@/lottie/loading.json';

interface ReadyProps {
  setReady: (value: boolean) => void;
}

function Ready(props: PropsWithChildren<ReadyProps>) {
  useEffect(() => () => void props.setReady(true), [props]);
  return null;
}

const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LoadingJosn,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return <Lottie options={defaultOptions} />;
};

export default function Intro({ children }: { children: any }) {
  const [ready, setReady] = useState(false);

  return (
    <>
      <Suspense fallback={<Ready setReady={setReady} />}>
        {cloneElement(children, { ready: ready.toString() })}
      </Suspense>
      <div className={`fullscreen bg ${ready ? 'ready' : 'notready'}`}>
        <div className='loader-container'>{!ready ? <Loading /> : null}</div>
      </div>
    </>
  );
}
