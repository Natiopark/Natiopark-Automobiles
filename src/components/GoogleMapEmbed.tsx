type Props = {
  src: string;
  title: string;
  className?: string;
};

export function GoogleMapEmbed({ src, title, className = "" }: Props) {
  return (
    <iframe
      title={title}
      src={src}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className={`map-embed min-h-[220px] w-full rounded-sm border-0 ${className}`}
    />
  );
}
