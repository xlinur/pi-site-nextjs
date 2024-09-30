'use client';

import { useState } from 'react';
import Button from '@/app/components/Button';
import CardFeedback from '@/app/components/Cards/CardFeedback';

import styles from '../styles.module.scss';

const INITIAL_AVAILABLE_ITEMS = 8;

const getTagsNamesList = (feedback) =>
  feedback.attributes.tags.data.map((tag) => tag.attributes.name) || [];

export default function PageFeedback({ feedbacks, moreReviewsBtn }) {
  const [expanded, setExpanded] = useState(false);
  const [selectedTag, setSelectedTag] = useState();

  const tagsList = [
    ...new Set(
      feedbacks.flatMap((feedback) => getTagsNamesList(feedback)) || [],
    ),
  ];

  const onMoreBtnClick = () => {
    setExpanded(!expanded);
  };

  const onTagSelect = (tagName) => () => {
    setExpanded(false);
    setSelectedTag(selectedTag === tagName ? undefined : tagName);
  };

  const filteredFeedbacks = selectedTag
    ? feedbacks.filter((feedback) =>
        getTagsNamesList(feedback).includes(selectedTag),
      )
    : feedbacks;

  return (
    <>
      <div className={styles.feedbackSectionLinks}>
        {tagsList.map((tagName) => (
          <Button
            key={tagName}
            size="sm"
            theme={selectedTag === tagName ? 'primary' : 'secondary'}
            onClick={onTagSelect(tagName)}
          >
            {tagName}
          </Button>
        ))}
      </div>

      <section className={styles.feedbackExpandableList}>
        <div className={styles.feedbackExpandableListGrid}>
          {filteredFeedbacks.map((feedback, idx) => (
            <CardFeedback
              key={feedback.id}
              className={
                !expanded &&
                idx >= INITIAL_AVAILABLE_ITEMS &&
                'd-none-important'
              }
              {...feedback.attributes}
            />
          ))}
        </div>

        {filteredFeedbacks.length > INITIAL_AVAILABLE_ITEMS && (
          <Button
            size="lg"
            name={moreReviewsBtn.name}
            onClick={onMoreBtnClick}
          />
        )}
      </section>
    </>
  );
}
