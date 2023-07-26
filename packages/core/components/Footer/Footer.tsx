import styled from '@emotion/styled';
import { Link } from '@nextui-org/react';

import { authorName, defaultUrl } from '../../constants';

export function Footer() {
  const date = new Date();

  return (
    <StyledFooter>
      <span>
        Copyright &copy; {date.getFullYear()}{' '}
        <Link href={defaultUrl} target="_blank">
          {authorName}
        </Link>{' '}
        All rights reserved.
      </span>
      <span>
      작은성장의 의미를 아는 미래는 과연 어떨까
        </Link>
      </span>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100px;
  padding: 0 1.3125rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  font-size: 0.75rem;
`;
