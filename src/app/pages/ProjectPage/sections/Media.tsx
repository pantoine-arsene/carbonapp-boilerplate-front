import styled from 'styled-components';
import { Media as MediaProps, MediaType } from 'types/components';

export function Media(media: MediaProps) {
  return (
    <Wrapper>
      {media.type === MediaType.PHOTO && <Image src={media.url} />}
      {media.type === MediaType.VIDEO && (
        <Video url={media.url} width={480} height={270} />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 480px;
  height: 270px;
  margin-right: 20px;
`;

const Image = styled.img`
  width: 480px;
  height: 100%;
  object-fit: cover;
`;

function Video({
  url,
  width,
  height,
}: {
  url: string;
  width: number;
  height: number;
}) {
  return (
    <iframe
      width={width}
      height={height}
      src={url}
      title="YouTube video player"
      frameBorder="0"
      allow="encrypted-media"
      allowFullScreen
    ></iframe>
  );
}
