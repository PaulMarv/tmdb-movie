import Image from "next/image";

export default function Loading() {
    return (
      <div className='flex justify-center mt-16'>
        <Image height={52} width={52} className='h-52' src='spinner.svg' alt='loading...' />
      </div>
    );
  }