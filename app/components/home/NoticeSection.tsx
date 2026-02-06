'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './NoticeSection.module.css';

interface Notice {
  id: number;
  title: string;
  date: string;
  category: '공지' | '안내' | '채용' | '입찰';
  isImportant?: boolean;
}

const NoticeSection = () => {
  const [activeTab, setActiveTab] = useState<'notice' | 'recruit'>('notice');

  // 최신 공지사항 데이터 (notice/list 페이지와 동일)
  const notices: Notice[] = [
    {
      id: 1,
      title: '[중요] 2026년 상반기 문화프로그램 운영 안내',
      date: '2026-02-05',
      category: '공지',
      isImportant: true
    },
    {
      id: 2,
      title: '[중요] 센터 이용 시간 변경 안내 (3월 1일부터 적용)',
      date: '2026-02-04',
      category: '안내',
      isImportant: true
    },
    {
      id: 42,
      title: '2026 정월대보름 맞이 민속놀이 한마당',
      date: '2026-02-05',
      category: '공지'
    },
    {
      id: 43,
      title: '디지털 역량 강화 교육 수강생 모집',
      date: '2026-02-03',
      category: '안내'
    },
    {
      id: 44,
      title: '2026 상반기 동아리실 정기 대관 공고',
      date: '2026-01-30',
      category: '공지'
    }
  ];

  // 채용/입찰 공고 데이터
  const recruits: Notice[] = [
    {
      id: 37,
      title: '2026년 상반기 문화예술 강사 모집',
      date: '2026-01-15',
      category: '채용'
    },
    {
      id: 38,
      title: '시설관리 계약직 채용 공고',
      date: '2026-01-10',
      category: '채용'
    },
    {
      id: 39,
      title: '공연기획팀 정규직 채용 안내',
      date: '2025-12-28',
      category: '채용'
    },
    {
      id: 40,
      title: '2026년 센터 청소용역 입찰 공고',
      date: '2026-01-12',
      category: '입찰'
    },
    {
      id: 41,
      title: '무대음향장비 구매 입찰 안내',
      date: '2026-01-05',
      category: '입찰'
    }
  ];

  const displayData = activeTab === 'notice' ? notices : recruits;

  return (
    <section className={styles.noticeSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>공지사항</h2>
          <Link href="/notice/list" className={styles.moreBtn}>
            더보기 +
          </Link>
        </div>

        <div className={styles.tabContainer}>
          <button
            className={`${styles.tab} ${activeTab === 'notice' ? styles.active : ''}`}
            onClick={() => setActiveTab('notice')}
          >
            공지/안내
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'recruit' ? styles.active : ''}`}
            onClick={() => setActiveTab('recruit')}
          >
            채용/입찰
          </button>
        </div>

        <div className={styles.noticeList}>
          {displayData.map((notice) => (
            <Link
              key={notice.id}
              href={`/notice/${notice.id}`}
              className={styles.noticeItem}
            >
              <div className={styles.noticeContent}>
                <span className={`${styles.category} ${styles[notice.category]}`}>
                  {notice.category}
                </span>
                <span className={styles.noticeTitle}>{notice.title}</span>
              </div>
              <span className={styles.date}>
                {notice.date}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NoticeSection;