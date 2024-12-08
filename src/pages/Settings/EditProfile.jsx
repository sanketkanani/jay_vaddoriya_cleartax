import { BBButton, BBDatePicker, BBInput, BBPasswordInput } from "@components";
import { Col, Row, Upload } from "antd";
import { useState } from "react";

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  console.log(img);
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};

export const EditProfile = () => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  const handleChange = (info) => {
    console.log(info);
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      {loading ? "loading" : "+"}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );
  return (
    <div className="d-flex flex-column flex-md-row align-items-start justify-content-center gap-3">
      <Upload
        name="avatar"
        listType="picture-circle"
        className="avatar-uploader overflow-hidden rounded-circle"
        showUploadList={false}
        customRequest={function (r) {
          r.onSuccess();
        }}
        onChange={handleChange}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="avatar"
            style={{
              width: "100%",
            }}
          />
        ) : (
          uploadButton
        )}
      </Upload>
      <Row gutter={[30, 22]}>
        <Col className="w-100" sm={12}>
          <BBInput label="Your Name" />
        </Col>
        <Col className="w-100" sm={12}>
          <BBInput label="User Name" />
        </Col>
        <Col className="w-100" sm={12}>
          <BBInput type="email" label="Email" />
        </Col>
        <Col className="w-100" sm={12}>
          <BBPasswordInput label="Password" />
        </Col>
        <Col className="w-100" sm={12}>
          <BBDatePicker label="Date of Birth" placeholder="DD MMM YYYY" />
        </Col>
        <Col className="w-100" sm={12}>
          <BBInput label="Present Address" />
        </Col>
        <Col className="w-100" sm={12}>
          <BBInput label="Permanent Address" />
        </Col>
        <Col className="w-100" sm={12}>
          <BBInput label="City" />
        </Col>
        <Col className="w-100" sm={12}>
          <BBInput label="Postal Code" />
        </Col>
        <Col className="w-100" sm={12}>
          <BBInput label="Country" />
        </Col>
        <Col className="w-100 text-end" sm={24}>
          <BBButton variant="primary" className="px-5">
            <span className="d-inline-flex px-5">Save</span>
          </BBButton>
        </Col>
      </Row>
    </div>
  );
};
