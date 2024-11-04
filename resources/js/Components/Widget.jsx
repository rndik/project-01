import { cn } from '@/lib/utils';
import React from 'react'

export default function Widget({classname, ...props}) {
    const {bgColor, count, icon, title} = props;
  return (
    <div classname={cn("relative overflow-hidden rounded-lg border bg-white px-4 pb-6 pt-5 sm:pt-6", classname)}>
        <div>
            <div classname={cn('absolute rounded-2xl p-3', bgColor)}>{icon}</div>
            <p className='ml-16 truncate text-sm font-medium text-muted-foreground'>{title}
            </p>
        </div>
        <div className='ml-16 flex items-baseline'>
            <p className='text-foreground text-2xl font-semibold'>
                {count}
            </p>
        </div>
    </div>
  )
}
