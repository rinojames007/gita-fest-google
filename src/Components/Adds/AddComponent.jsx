import React, { useEffect  } from 'react';

const AddComponent = () => {
    const { dataAdSlot } = props;  



    useEffect(() => {

        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        }

        catch (e) {

        }

    },[]);



  return (
    <>
            <ins className="adsbygoogle"
                style={{ display: "block" }}
                data-ad-client="ca-pub-5629107454814663"
                data-ad-slot={dataAdSlot}
                data-ad-format="auto"
                data-full-width-responsive="true">
            </ins>
        </>
  )
}

export default AddComponent