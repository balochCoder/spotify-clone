import { Song } from "@/types";

import useSubscribeModal from "@/hooks/useSubscribeModal";
import usePlayer from "@/hooks/usePlayer";
import useAuthModal from "@/hooks/useAuthModal";
import {useUser} from "@/hooks/useUser";

const useOnPlay = (songs: Song[]) => {
    const player = usePlayer();
    const authModal = useAuthModal();
    const subscribeModal = useSubscribeModal();
    const {  user, subscription } = useUser();

    const onPlay = (id: string) => {
        if (!user) {
            return authModal.onOpen();
        }
        if (!subscription) {
            return subscribeModal.onOpen();
        }

        player.setId(id);
        player.setIds(songs.map((song) => song.id));
    }

    return onPlay;
};

export default useOnPlay;