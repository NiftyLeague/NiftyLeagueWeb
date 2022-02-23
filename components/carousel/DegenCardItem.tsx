import Image from 'next/image';

const DegenCardItem = (
  { name, source, createdDate } : { name: string; source: string; createdDate: string }
): JSX.Element => (
    <div className="slide">
        <div className="slide-content">
            <div className="browse-single">
                <div className="d-flex p-sm-4 p-2 pb-0 align-items-center">
                    <h5 className="me-auto">{name}</h5>
                    <a className="ms-auto" href="#">
                        <svg
                            width="34"
                            height="32"
                            viewBox="0 0 34 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                width="33.7778"
                                height="32"
                                rx="16"
                                fill="#757575"
                                fillOpacity="0.5"
                            />
                            <path
                                d="M9.05777 17.1362L9.11998 17.0384L12.8711 11.1702C12.9259 11.0843 13.0548 11.0932 13.0963 11.1865C13.7229 12.591 14.2637 14.3376 14.0104 15.4251C13.9022 15.8725 13.6059 16.4784 13.2726 17.0384C13.2296 17.1199 13.1822 17.1999 13.1318 17.2769C13.1081 17.3125 13.0681 17.3332 13.0252 17.3332H9.16739C9.06369 17.3332 9.00295 17.2206 9.05777 17.1362Z"
                                fill="white"
                            />
                            <path
                                d="M25.7778 18.2267V19.1556C25.7778 19.2089 25.7452 19.2563 25.6978 19.277C25.4074 19.4015 24.4133 19.8578 24 20.4326C22.9452 21.9007 22.1393 24 20.3378 24H12.8222C10.1585 24 8 21.8341 8 19.1615V19.0756C8 19.0044 8.05776 18.9467 8.12888 18.9467H12.3185C12.4015 18.9467 12.4622 19.0237 12.4548 19.1052C12.4252 19.3778 12.4756 19.6563 12.6044 19.9096C12.8533 20.4148 13.3689 20.7304 13.9259 20.7304H16V19.1111H13.9496C13.8444 19.1111 13.7822 18.9896 13.843 18.9037C13.8652 18.8696 13.8904 18.8341 13.917 18.7941C14.1111 18.5185 14.3881 18.0904 14.6637 17.603C14.8519 17.2741 15.0341 16.923 15.1807 16.5704C15.2104 16.5967 15.2341 16.4415 15.2578 16.3778C15.2978 16.2652 15.3393 16.16 15.3689 16.0548C15.3985 15.9659 15.4222 15.8726 15.4459 15.7852C15.5156 15.4859 15.5452 15.1689 15.5452 14.84C15.5452 14.7111 15.5393 14.5763 15.5274 14.4474C15.5215 14.3067 15.5937 14.1659 15.4859 14.0252C15.4741 13.9007 15.4519 13.7778 15.4281 13.6489C15.3985 13.4607 15.357 13.2741 15.3096 13.0859L15.2933 13.0148C15.2578 12.8859 15.2281 12.763 15.1867 12.6341C15.0696 12.2296 14.9348 11.8356 14.7926 11.4667C14.7407 11.32 14.6815 11.1793 14.6222 11.0385C14.5348 10.8267 14.4459 10.6341 14.3644 10.4519C14.323 10.3689 14.2874 10.2933 14.2519 10.2163C14.2119 10.1289 14.1704 10.0415 14.1289 9.95853C14.0993 9.89482 14.0652 9.83556 14.0415 9.77629L13.7881 9.30815C13.7526 9.24444 13.8119 9.16888 13.8815 9.18815L15.4667 9.61776H15.4711C15.4741 9.61776 15.4756 9.61926 15.477 9.61926L15.6859 9.67703L15.9156 9.74224L16 9.76591V8.82371C16 8.36888 16.3644 8 16.8148 8C17.04 8 17.2444 8.09185 17.3911 8.24147C17.5378 8.39112 17.6296 8.59556 17.6296 8.82371V10.2222L17.7985 10.2696C17.8119 10.2741 17.8252 10.28 17.837 10.2889C17.8785 10.32 17.9378 10.3659 18.0133 10.4222C18.0726 10.4696 18.1363 10.5274 18.2133 10.5867C18.3659 10.7096 18.5481 10.8681 18.7481 11.0594C18.8015 11.0963 18.8533 11.1437 18.9007 11.1911C19.1585 11.4311 19.4474 11.7126 19.723 12.0237C19.8 12.1111 19.8756 12.2 19.9526 12.2933C20.0296 12.3881 20.1111 12.4815 20.1822 12.5748C20.2756 12.6993 20.3763 12.8281 20.4637 12.963C20.5952 13.0267 20.5526 13.0919 20.5926 13.1556C20.7052 13.3259 20.8044 13.5922 20.8993 13.6785C20.9393 13.76 20.9807 13.8489 21.0163 13.9363C21.1215 14.1719 21.2044 14.4119 21.2578 14.6519C21.2741 14.7037 21.2859 14.76 21.2919 14.8104V14.8222C21.3096 14.8933 21.3156 14.9689 21.3215 15.0459C21.3452 15.2919 21.3333 15.5378 21.28 15.7852C21.2578 15.8904 21.2281 15.9896 21.1926 16.0948C21.157 16.1956 21.1215 16.3007 21.0756 16.4C20.9867 16.6059 20.8815 16.8119 20.757 17.0044C20.717 17.0756 20.6696 17.1511 20.6222 17.2222C20.5704 17.2978 20.517 17.3689 20.4696 17.4385C20.4044 17.5274 20.3348 17.6207 20.2637 17.7037C20.2 17.7911 20.1348 17.8785 20.0637 17.9556C19.9644 18.0726 19.8696 18.1837 19.7704 18.2904C19.7111 18.36 19.6474 18.4311 19.5822 18.4948C19.5185 18.5659 19.4533 18.6296 19.3941 18.6889C19.2948 18.7881 19.2119 18.8652 19.1422 18.9289L18.9793 19.0785C18.9556 19.0993 18.9244 19.1111 18.8919 19.1111H17.6296V20.7304H19.2178C19.5733 20.7304 19.9111 20.6044 20.1837 20.3733C20.277 20.2919 20.6844 19.9393 21.1659 19.4074C21.1822 19.3896 21.203 19.3763 21.2267 19.3704L25.6133 18.1022C25.6948 18.0785 25.7778 18.1407 25.7778 18.2267Z"
                                fill="white"
                            />
                        </svg>
                    </a>
                </div>
                <div className="d-flex px-2 px-sm-4 pb-3 align-items-center">
                    <button className="me-1">Created</button>
                    <label>{createdDate}</label>
                </div>

                <Image src={source} layout="fixed" width="258" height="278" />
                <div className="d-flex px-sm-4 py-3">
                    <h4 className="color-purple me-auto">4</h4>
                    <select className="ms-auto">
                        <option>Traits</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
);

export default DegenCardItem;
