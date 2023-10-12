import styled from 'styled-components'

export const MainSidebar = styled.div`
  max-width: 418px;
  padding: 20px 90px 20px 78px;
`

export const SideBarBlock = styled.div`
  height: 100%;
  padding: 240px 0 0 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
`

export const SideBarList = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`

export const SideBarItem = styled.div`
  width: 250px;
  height: 150px;
  margin-bottom: 23px;
`

export const Skeletons = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgb(0, 0, 0),
    rgb(77, 77, 77),
    rgb(139, 139, 139)
  );
  background-size: 400% 400%;
  animation: gradient 5s ease infinite;
  transform: translate3d(0, 0, 0);
`

export const SideBarLink = styled.a`
  width: 100%;
  height: 100%;
`

export const SideBarImg = styled.img`
  width: 100%;
  height: auto;
`
