/**
 * Key Value Mapping
 */

enum State {
    loading,
    done,
    error,
}

type GlobalApiStatus = {
    getUser: State;
    paginateUsers: State | undefined;
    banUser: State | null;
    getPosts: State;
}

type UserApiStatus = {
    getUser: State;
    paginateUsers: State | undefined;
    banUser: State | null;
}

// key값을 이용한 타입 구성 (1)
type UserApiStatus2 = {
    getUser: GlobalApiStatus['getUser'];
    paginateUsers: GlobalApiStatus['paginateUsers'];
    banUser: GlobalApiStatus['banUser'];
}

// key값을 이용한 타입 구성 (2) : UserApiStatus2와 UserApiStatus3은 같다
type UserApiStatus3 = {
    [k in 'getUser' | 'paginateUsers' | 'banUser']: GlobalApiStatus[k];
    // getUser:
    // paginateUsers:
    // banUser:
}
// Pick<대상 타입, 뽑아오고 싶은 key값>
type PickedUserApiStatus = Pick<GlobalApiStatus, 'getUser' | 'banUser' | 'paginateUsers'>;

// Omit<대상 타입, 제외하고 싶은 key값>
type OmitUserApiStatus = Omit<GlobalApiStatus, 'getPosts'>;

/**
 * keyof
 */
type AllKeys = keyof GlobalApiStatus; // GlobalApiStatus의 key값들로 type을 구성

const key: AllKeys = 'getUser';

// UserApiStatus3와 동일
type KeyOfUserApiStatus = {
    [k in keyof GlobalApiStatus]: GlobalApiStatus[k];
}

// 마지막 키값만 빼기
type KeyOfUserApiStatus2 = {
    [k in Exclude<keyof GlobalApiStatus, 'getPosts'>]: GlobalApiStatus[k];
}
// 모든 키값들이 Optional로 변경
type KeyOfUserApiStatus3 = {
    [k in Exclude<keyof GlobalApiStatus, 'getPosts'>]?: GlobalApiStatus[k];
}

interface LoadingStatus {
    type: 'loading';
    data: string[];
}

interface ErrorStatus {
    type: 'error';
    message: string;
}

type FetchStatus = LoadingStatus | ErrorStatus;

type StatusType = FetchStatus['type'];