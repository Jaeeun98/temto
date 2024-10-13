export const handleApiCall = async (api: any, type: string) => {
  const result = await api();

  if (result.status === "FAIL") {
    alert(result.errorMessage);
  } else {
    switch (type) {
      case "add":
        alert("데이터가 등록되었습니다.");
        break;
      case "modify":
        alert("데이터가 수정되었습니다.");
        break;
      default:
        break;
    }
    window.location.reload();
  }
};

export const handleDeleteApiCall = async (api: any, refetch: any) => {
  const result = await api();

  if (!result) return;
  if (result.status === 200) {
    alert("해당 리스트가 삭제되었습니다.");
    refetch();
  }
};
