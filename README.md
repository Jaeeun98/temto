## 뱃지챌린지, 관리자 사이트 - 프론트엔드 

<div align=center> 
  <img src="https://github.com/user-attachments/assets/1e214685-e823-4c94-b16f-b1d4c2b740c4" >
  <p>http://badgechallenge.kro.kr/order</p>
</div>

<br>

<br>

   
## 프로젝트 소개 

- 주문 내역과 택배 배송 상태를 관리할 수 있는 관리자용 웹 사이트 개발 
- 경상남도 공공데이터 활용 창업경진대회 장려상 수상
- 개발 기간: 2024.09


<br>


## 주요 기능 

- 로그인
- 주문 목록 및 관리
- 특산품 목록 및 관리 

<br>



## 개발환경 & 기술스택 

- 기술스택 : React, Typescript, react-query, ContextAPI, Axios
- 협업 툴 : Discord, Swagger, Github
- 디자인 : Figma

<br>



## Error

- 리렌더링 최적화 작업 <br>
   React Profiler를 활용하여 성능 개선 작업을 진행하고 불필요한 리렌더링을 제거.
   React Profiler를 통해 checkbox 선택 시마다 app 전체가 리렌더링되는 문제를 발견. checkbox Provider를 app 전체에 적용했기 때문에 발생한 문제였음. Provider를 해당 데이터를 사용하는 컴포넌트만 감싸도록 수정하여 불필요한 리렌더링을 제거.

- 로그인 구현  <br>
   사용자 로그인 시 localStorage에 토큰을 저장하고, 해당 토큰을 header에 넣어 API 호출을 하도록 구현.
   로그인 후 페이지 이동 시 토큰을 가져오지 못하는 에러 발생.
   axios.create로 토큰을 생성했지만, 이는 처음 호출 시 한 번만 실행되기 때문에 발생한 에러.
   axiosInstance.interceptors를 사용해 매 요청마다 최신 토큰을 헤더에 넣도록 수정.

- 메뉴 변경 시 발생하는 Title 깜빡임 해결  <br>
   처음에는 useEffect를 사용해 pathname이 변경될 때마다 Title을 가져오도록 설정했으나, 컴포넌트가 렌더링된 후에 실행되므로 UI가 먼저 렌더링되고 상태가 업데이트되어 Title 깜빡임 발생.
   useMemo를 사용해 컴포넌트 렌더링 시 제목을 즉시 업데이트하도록 수정.

<br>

## 프로젝트 구조

```
src
 ┣ api
 ┃ ┣ area_code.ts
 ┃ ┣ axiosClient.ts
 ┃ ┣ goods.ts
 ┃ ┣ local.ts
 ┃ ┣ local_offer.ts
 ┃ ┣ login.ts
 ┃ ┣ order.ts
 ┃ ┣ push.ts
 ┃ ┗ tour.ts
 ┣ components
 ┃ ┣ common
 ┃ ┃ ┣ modal
 ┃ ┃ ┃ ┣ modal_alert.tsx
 ┃ ┃ ┃ ┣ modal_area.tsx
 ┃ ┃ ┃ ┣ modal_badge_code.tsx
 ┃ ┃ ┃ ┣ modal_button.tsx
 ┃ ┃ ┃ ┣ modal_close_button.tsx
 ┃ ┃ ┃ ┣ modal_img_add.tsx
 ┃ ┃ ┃ ┣ modal_input_date.tsx
 ┃ ┃ ┃ ┣ modal_input_number.tsx
 ┃ ┃ ┃ ┣ modal_input_search.tsx
 ┃ ┃ ┃ ┗ modal_input_text.tsx
 ┃ ┃ ┣ table
 ┃ ┃ ┃ ┣ action_buttons.tsx
 ┃ ┃ ┃ ┣ modals.tsx
 ┃ ┃ ┃ ┣ pagination.tsx
 ┃ ┃ ┃ ┣ push_table.tsx
 ┃ ┃ ┃ ┣ table.tsx
 ┃ ┃ ┃ ┣ table_button.tsx
 ┃ ┃ ┃ ┗ table_checkbox.tsx
 ┃ ┃ ┣ add_button.tsx
 ┃ ┃ ┣ delete_button.tsx
 ┃ ┃ ┗ list_container.tsx
 ┃ ┣ nav
 ┃ ┃ ┣ nav_list.tsx
 ┃ ┃ ┣ nav_user.tsx
 ┃ ┃ ┗ navbar.tsx
 ┃ ┣ footer.tsx
 ┃ ┣ goods_modal.tsx
 ┃ ┣ header.tsx
 ┃ ┣ local_modal.tsx
 ┃ ┣ local_offer_modal.tsx
 ┃ ┣ progress_button.tsx
 ┃ ┣ push_modal.tsx
 ┃ ┗ tour_modal.tsx
 ┣ context
 ┃ ┣ table_checkboxId_context.tsx
 ┃ ┗ table_data_context.tsx
 ┣ hooks
 ┃ ┣ useAlertModal.ts
 ┃ ┗ useSetTableData.ts
 ┣ pages
 ┃ ┣ goods.tsx
 ┃ ┣ local.tsx
 ┃ ┣ local_offer.tsx
 ┃ ┣ login.tsx
 ┃ ┣ order.tsx
 ┃ ┣ push.tsx
 ┃ ┗ tour.tsx
 ┣ styles
 ┃ ┣ button.ts
 ┃ ┣ modal_text_input_wrapper.ts
 ┃ ┣ modal_wrapper.ts
 ┃ ┣ table_container.ts
 ┃ ┣ text_input.ts
 ┃ ┗ theme.ts
 ┣ types
 ┃ ┣ goods.ts
 ┃ ┣ table.ts
 ┃ ┗ tour.ts
 ┣ utils
 ┃ ┗ apiHandler.ts
 ┣ .editorconfig
 ┣ App.js
 ┣ index.css
 ┣ index.js
 ┣ react-table-config.d.ts
 ┗ reportWebVitals.js



