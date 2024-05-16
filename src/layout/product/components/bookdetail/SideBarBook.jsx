import { useCallback, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import ReactSimpleImageViewer from "react-simple-image-viewer";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const SideBarBook = (props) => {
    let imageList = [];
    if (props.book.images) {
        imageList = props.book.images.map((image, index) => {
            return image.base_url || image.large_url;
        });
    }
    console.log(imageList);
    // Xử lí phần hình ảnh
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };
    return (
        <>
            <div>
                <Carousel
                    emulateTouch={true}
                    swipeable={true}
                    showIndicators={false}
                >
                    {imageList.map((image, index) => (
                        <div
                            key={index}
                            onClick={() => openImageViewer(index)}
                            style={{
                                width: "100%",
                                height: "400px",
                                objectFit: "cover",
                            }}
                        >
                            <img
                                alt=""
                                src={image}
                                width="300"
                                style={{
                                    margin: "2px",
                                    objectFit: "cover",
                                }}
                            />
                        </div>
                    ))}
                </Carousel>
                {isViewerOpen && (
                    <ReactSimpleImageViewer
                        src={
                           imageList
                        }
                        currentIndex={currentImage}
                        disableScroll={false}
                        closeOnClickOutside={true}
                        onClose={closeImageViewer}
                        backgroundStyle={{
                            backgroundColor: "rgba(0,0,0,0.7)",
                        }}
                    />
                )}
            </div>
            <div className="mt-2">
                <span>
                    <strong>Đặc điểm nổi bật</strong>
                </span>
                <ul>
                    <li>
                        <i
                            className="fa-solid fa-circle-check "
                            style={{ color: "blue" }}
                        ></i>
                        <span>
                            Kích thước lớn và bìa cứng, tạo cảm giác sang trọng
                            và bền bỉ.
                        </span>
                    </li>
                    <li>
                        <i
                            className="fa-solid fa-circle-check"
                            style={{ color: "blue" }}
                        ></i>
                        <span>
                            Hình vẽ ngộ nghĩnh và màu sắc sống động, thu hút sự
                            chú ý của trẻ em.
                        </span>
                    </li>
                    <li>
                        <i
                            className="fa-solid fa-circle-check "
                            style={{ color: "blue" }}
                        ></i>
                        <span>
                            Cung cấp thông tin tổng quát về diện tích, dân số và
                            ngôn ngữ của các quốc gia.
                        </span>
                    </li>
                </ul>
                <div className="more-summary d-flex justify-content-between align-items-center">
                    <span>
                        <img src="/images/ic.jpg" alt="" />
                        Xem thêm <b>Tóm tắt nội dung sách</b>
                    </span>
                    <i className="fa-solid fa-angle-right"></i>
                </div>
            </div>
        </>
    );
};

export default SideBarBook;
