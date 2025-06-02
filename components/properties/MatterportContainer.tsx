
function MatterportContainer({
  matteportId,
}: {
  matteportId: string;
  name: string;
}) {
  return (
    <section className='h-[300px] md:h-[500px] relative mt-8'>
      <iframe
        src={`https://my.matterport.com/show/?m=${matteportId}`}
        title="Matterport 3D Tour"
        allowFullScreen
        loading="lazy"
        className="absolute top-0 left-0 w-full h-full"
        style={{ border: 0 }}
      />
    </section>
  );
}
export default MatterportContainer;
