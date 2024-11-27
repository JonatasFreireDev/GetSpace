import { useCallback, useEffect } from "react";
import { useFilterResponse } from "@/hooks/useFilterResponse/useFilterResponse";
import { useGetSpaceStations } from "@/services";
import { SpaceStation } from "@/services/getSpaceStations/getSpaceStations.types";
import { SpaceStationsCard } from "./components/SpaceStationsCard/SpaceStationsCard";
import { LoadingAndEmptyWrapper } from "@/components/molecules";
import { SpaceStationsCardSkeleton } from "./components/SpaceStationsCard/SpaceStationsCard.Skeleton";
import { useSpaceStationsStore } from "@/store";
import { Pagination } from "./components/Pagination/Pagination";
import { useModal } from "@/components/organisms/Modal/store";

export const SpaceStations = () => {
  const { data, refetch, isLoading } = useGetSpaceStations();
  const {
    filterData,
    paginationData: { offset },
  } = useSpaceStationsStore();

  useEffect(() => {
    refetch();
  }, [filterData, offset, refetch]);

  const filterFunc = useCallback(
    (search: string) =>
      data?.results.filter(
        (station) =>
          station.name.toLowerCase().includes(search) ||
          station.founded.toLowerCase().includes(search),
      ),
    [data?.results],
  );

  const { mapedData } = useFilterResponse<SpaceStation>(
    data?.results,
    filterFunc,
  );

  const PaginationWrapper = useCallback(
    () => <Pagination totalCount={data?.count} />,
    [data?.count],
  );

  const { openModal } = useModal();

  const handleModal = () => {
    openModal({
      id: "SpaceStation",
      content: (
        <div className="bg-slate-600">
          <div>content</div>
          <button
            onClick={() => {
              openModal({
                id: "SpaceStation2",
                content: (
                  <div>
                    <div>
                      Soufflé danish jelly beans cupcake cookie candy. Tart
                      wafer donut gingerbread danish pastry sugar plum. Cake
                      pudding fruitcake gingerbread dragée cookie. Pudding
                      topping pastry muffin carrot cake gummi bears tootsie
                      roll. Biscuit candy jelly ice cream dragée cotton candy
                      caramels. Ice cream cheesecake cookie liquorice muffin
                      jelly-o powder. Brownie gummi bears tiramisu caramels
                      toffee sesame snaps cookie. Tootsie roll halvah danish
                      wafer lemon drops soufflé marzipan cotton candy. Tootsie
                      roll brownie biscuit cupcake bonbon cheesecake gummies
                      cheesecake sugar plum. Gummi bears chupa chups cupcake
                      wafer bear claw jelly beans cheesecake tiramisu. Toffee
                      chocolate bar sugar plum icing ice cream pie caramels.
                      Gingerbread pudding cheesecake tootsie roll donut jelly-o
                      tart. Lemon drops pudding cake cake pastry halvah candy
                      canes gummi bears ice cream. Caramels tiramisu soufflé
                      cake soufflé toffee. Candy shortbread carrot cake pie pie
                      chocolate bar sesame snaps pudding. Apple pie bonbon
                      muffin lollipop cookie pie cake tart marzipan. Candy canes
                      chocolate cake cookie halvah oat cake cake. Halvah carrot
                      cake chocolate cake gummi bears tootsie roll tootsie roll
                      bonbon jelly cake. Apple pie cookie tart cake cookie cake
                      cake. Caramels sugar plum muffin dessert lemon drops
                      toffee pastry. Pudding chupa chups marshmallow shortbread
                      sugar plum jelly-o croissant. Chocolate bar pastry chupa
                      chups pie apple pie lemon drops halvah. Tiramisu tart bear
                      claw danish jelly ice cream. Gummi bears pie jelly beans
                      jelly beans chocolate bar sweet roll. Jujubes jelly-o
                      icing jujubes danish lollipop cotton candy icing candy.
                      Brownie powder biscuit dessert donut apple pie marzipan
                      cotton candy ice cream. Chocolate dessert chupa chups
                      liquorice pudding tart carrot cake. Croissant toffee
                      marshmallow sweet tiramisu halvah. Toffee gingerbread
                      danish fruitcake biscuit bonbon chupa chups jelly.
                      Caramels marzipan chocolate cake sweet roll bonbon candy
                      canes sugar plum macaroon. Cotton candy marzipan lollipop
                      jujubes chupa chups gingerbread tiramisu. Chocolate pastry
                      jelly beans chocolate cake halvah. Caramels lemon drops
                      liquorice halvah pudding cake. Carrot cake wafer sweet
                      roll jelly beans ice cream pastry gummies jujubes jelly-o.
                      Croissant oat cake wafer liquorice pudding cake. Candy
                      liquorice danish tart sesame snaps. Gummi bears wafer pie
                      tart cotton candy chocolate bar shortbread chocolate ice
                      cream. Cookie sweet roll apple pie sesame snaps soufflé
                      pudding bear claw candy bonbon. Marzipan tiramisu muffin
                      tiramisu jelly cake tootsie roll candy canes. Cheesecake
                      danish cookie cotton candy pastry tootsie roll cheesecake
                      tootsie roll. Pastry candy gingerbread tootsie roll dragée
                      jelly-o dessert bonbon. Cake cake cake soufflé apple pie
                      chocolate cake lollipop.
                    </div>
                    <button
                      onClick={() => {
                        openModal({
                          id: "spaceStation3",
                          content: (
                            <div className="">
                              Soufflé danish jelly beans cupcake cookie candy.
                              Tart wafer donut gingerbread danish pastry sugar
                              plum. Cake pudding fruitcake gingerbread dragée
                              cookie. Pudding topping pastry muffin carrot cake
                              gummi bears tootsie roll. Biscuit candy jelly ice
                              cream dragée cotton candy caramels. Ice cream
                              cheesecake cookie liquorice muffin jelly-o powder.
                              Brownie gummi bears tiramisu caramels toffee
                              sesame snaps cookie. Tootsie roll halvah danish
                              wafer lemon drops soufflé marzipan cotton candy.
                            </div>
                          ),
                          type: "default",
                          isDialog: true,
                        });
                      }}
                    >
                      nooovo{" "}
                    </button>
                  </div>
                ),
                type: "side",
                position: "right",
              });
            }}
          >
            novo modal
          </button>
        </div>
      ),
      type: "bottom",
      size: "md",
      isDialog: true,
    });
  };

  return (
    <>
      <button onClick={handleModal}>Modal</button>
      <LoadingAndEmptyWrapper
        isData={mapedData}
        isLoading={isLoading}
        LoadingSkeleton={<SpaceStationsCardSkeleton />}
      >
        <PaginationWrapper />
        <div className="my-5 grid gap-8 sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
          {mapedData?.map((spaceStation) => (
            <SpaceStationsCard
              spaceStation={spaceStation}
              key={spaceStation.id}
            />
          ))}
        </div>
        <PaginationWrapper />
      </LoadingAndEmptyWrapper>
    </>
  );
};
