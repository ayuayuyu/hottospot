import uploadPhoto from './uploadPhoto';

const UploadImg = (locationId) => {
  return (
    <div>
      <button>
        ファイルの選択
        <input
          type="file"
          onChange={(e) => uploadPhoto(e, locationId)}
          accept=".png, .jpeg, .jpg"
        />
      </button>
    </div>
  );
};
export default UploadImg;
